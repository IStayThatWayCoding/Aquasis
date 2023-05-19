const Discord = require('discord.js')
const colors = require('../../colors.json')

module.exports = {
    name: 'rules',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'Rule Embed',
    usage: `rules`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Server Rules`)
            .setColor(colors.MUSIC)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField("Rule 1", 'Test')
        
        message.channel.send(embed)
           
    }
}