const Discord = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Information',
    timeout: 5000,
    description: 'Help command',
    usage: `help`,
    run: async (bot, message, args) => {

        // unavailable(message)

        if(args[0]) {
            return getCMD(bot, message, args[0]);
        } else {
            return helpMSG(bot, message);
        }
        
    }
}

async function unavailable(message){
    const embed = new Discord.MessageEmbed()
    .setColor('#FF00FF')
    .setDescription("Due to the current event(s) happening in the server, this command is temporarily unavailable. If you need help, open a ticket.")

    message.channel.send(embed)
}

async function helpMSG(bot, message) {
    const embed = new Discord.MessageEmbed()
    .setColor("#8500FF")
    .setTitle(`${bot.user.username} - Help`)
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`Server Prefix: \`${config.prefix}\`\n\nFor a full list of commands, please type \`${config.prefix}commands\` \n\nTo see more info about a specific command, please type \`${config.prefix}help <command>\` without the \`<>\``)
    .setFooter(`${bot.user.username} - ${config.normal_footer}`)

    message.channel.send(embed);


}

// async function msToTime(duration) {
//     var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = Math.floor((duration / 1000) % 60),
//     minutes = Math.floor((duration / (1000 * 60)) % 60),
//     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }

async function getCMD(bot, message, input) {
    const embed = new Discord.MessageEmbed()

    const cmd = bot.commands.get(input.toLowerCase()) || bot.commands.get(bot.aliases.get(input.toLowerCase()));

    let info = `No information founds for command **${input.toLowerCase()}**.`;

    if (!cmd) {
        return message.channel.send(embed.setColor("#FFFFFF").setDescription(info));
    }

    if (cmd.name) info = `**Command Name**: ${cmd.name}`
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.timeout) info += `\n**Timeout**: ${cmd.timeout}ms`;
    if (cmd.usage) {
        info += `\n**Usage**: ${config.prefix}${cmd.usage}`;
        embed.setFooter('<> = REQUIRED | [] = OPTIONAL')
    }
    if (cmd.usage2) info += `\n**Usage 2**: ${config.prefix}${cmd.usage2}`;

    return message.channel.send(embed.setColor("#CBC3E3").setDescription(info));
}
