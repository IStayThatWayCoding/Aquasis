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

        // const embed = new Discord.MessageEmbed()
        //     .setTitle(`${message.guild.name} - Server Rules`)
        //     .setColor(colors.MUSIC)
        //     .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //     .addField("Rule 1", 'Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.', inline: true)
        //     .addField("Rule 2", 'Obey all staff members. Do not argue with staff - their decisions are final. If someone is breaking the rules, __ping a staff member or admin in the channel or dm a mod instead of mini-modding__. Refrain from troll/unnecessary pinging of staff.')
        //     .addField(name: "Rule 3", 'Swearing/cursing is strongly discouraged and may result in a warn/mute, especially if done excessively. This server is meant to be PG. Slurs of **__ANY KIND__** are prohibited and will result in immediate punishment.')
        //     .addField("Rule 4", '')
        //     .addField("Rule 5", '')
        //     .addField("Rule 6", '')
        //     .addField("Rule 7", '')
        //     .addField("Rule 8", '')
        //     .addField("Rule 9", '')
        //     .addField("Rule 10", '')
        //     .addField("Rule 11", '')
        //     .addField("Rule 12", '')
        //     .addField("Rule 13", '')

        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Server Rules`)
            .setColor(colors.MUSIC)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
                { name: "Rule 1", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                { name: "Rule 2", value: "Obey all staff members. Do not argue with staff - their decisions are final. If someone is breaking the rules, __ping a staff member or admin in the channel or dm a mod instead of mini-modding__. Refrain from troll/unnecessary pinging of staff.", inline: true},
                { name: "Rule 3", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 4", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 5", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 6", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 7", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 8", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 9", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 10", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 11", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 12", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 13", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
                // { name: "Rule 14", value: "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.", inline: true},
            )

        
        message.channel.send(embed)
           
    }
}