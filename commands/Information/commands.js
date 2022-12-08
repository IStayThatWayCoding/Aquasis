const Discord = require('discord.js');
const { stripIndents } = require('common-tags')
const config = require('../../config.json')
const colors = require('../../colors.json');
const pagination = require('discord.js-pagination')
let footer = `Use ${config.prefix}help <command> to find out more about a command!`

module.exports = {
    name: "commands",
    aliases: ['c'],
    category: "Information",
    timeout: 5000,
    description: "Lists the commands",
    usage: `commands`,
    run: async (bot, message) => {




        // unavailable(message)
        // return;


        const fun = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .setColor(colors.MUSIC)
        .setDescription(`\`${config.prefix}8ball\`\n\`${config.prefix}advice\`\n\`${config.prefix}beg\`\n\`${config.prefix}daily\`\n\`${config.prefix}gamble\`\n\`${config.prefix}guess\`\n\`${config.prefix}work\``)
        .setAuthor(footer)

        const information = new Discord.MessageEmbed()
        .setTitle("Informational Commands")
        .setColor(colors.MUSIC)
        .setDescription(`\`${config.prefix}balance\`\n\`${config.prefix}commands\`\n\`${config.prefix}help\`\n\`${config.prefix}info\`\n\`${config.prefix}serverinfo\`\n\`${config.prefix}whois\``)
        .setAuthor(footer)

        const levels = new Discord.MessageEmbed()
        .setTitle("Level Commands")
        .setColor(colors.MUSIC)
        .setDescription(`\`${config.prefix}edit\`\n\`${config.prefix}leaderboard\`\n\`${config.prefix}level\`\n\`${config.prefix}setlevel\`\n\`${config.prefix}setxp\``)
        .setAuthor(footer)

        const roles = new Discord.MessageEmbed()
        .setTitle("Roles Commands")
        .setColor(colors.MUSIC)
        .setDescription(`\`${config.prefix}botupdates\`\n\`${config.prefix}noxp\``)
        .setAuthor(footer)

        const admin = new Discord.MessageEmbed()
        .setTitle("Admin Commands")
        .setColor(colors.MUSIC)
        .setDescription(`\`${config.prefix}givecoins\`\n\`${config.prefix}removecoins\`\n\`${config.prefix}resetcoins\``)
        .setAuthor(footer)


        const pages = [
            fun,
            information,
            levels,
            roles,
            admin
        ]

        const emojiList = ["⬅️", "➡️"];

        const timeout = '120000'

        pagination(message, pages, emojiList, timeout)

        
    }
}

async function unavailable(message){
    const embed = new Discord.MessageEmbed()
    .setColor('#FF00FF')
    .setDescription("Due to the current event(s) happening in the server, this command is temporarily unavailable. If you need help, open a ticket.")

    message.channel.send(embed)
}

/* Advanced Help Command
* Doing something different, this is fetching from the categories, automatically adding
* If the manual thing doesn't work out, unslash this!
* return getAll(bot, message) - call this function for the advanced commands
*/

// async function getAll(bot, message){
//     const embed = new Discord.MessageEmbed()
//     .setColor(colors.MUSIC)
//     .setTitle('Commands')
//     .setThumbnail(bot.user.avatarURL())
//     .setFooter(`${bot.user.username} - ${config.normal_footer}`)

//     const commands = (category) => {
//         return bot.commands
//         .filter(cmd => cmd.category === category)
//         .map(cmd => `- \`${(config.prefix) + cmd.name}\``)
//         .join('\n');
//     }
    

//     const info = bot.categories
//     .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(`1`)}** \n${commands(cat)}`)
//     .reduce((string, category) => `${string}\n\n${category}`);

//     return message.channel.send(embed.setDescription('Use `' + (`${config.prefix}help <commandName>\` without the \`<>\` to see more information about a specific command.\n\n${info}`)));
// }
