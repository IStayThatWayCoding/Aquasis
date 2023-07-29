const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: [''],
    category: 'Admin',
    timeout: 5000,
    description: 'Returns the bots latency',
    usage: `>ping`,
    run: async (bot, message, args) => {
        if (!message.member.roles.cache.has('934810508698214470')) return message.channel.send("You must have the <@&934810508698214470> role to use this command.")

        console.log(parseInt('0'));

        const msg = await message.channel.send('🏓 Pinging...').then(m => m.delete({timeout: 100}));
        
        const embed = new Discord.MessageEmbed()
        .setColor("#322D80")
        .setTitle("🏓 Pong!")
        .setDescription(`Bot Latency is **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \nAPI Latency is **${Math.round(bot.ws.ping)} ms**`);

        message.channel.send(embed);
        message.delete();
           
    }
}
