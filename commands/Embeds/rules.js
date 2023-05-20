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

            let rule1 = "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished."
            let rule2 = "Obey all staff members. Do not argue with staff - their decisions are final. If someone is breaking the rules, __ping a staff member or admin in the channel or dm a mod instead of mini-modding__. Refrain from troll/unnecessary pinging of staff."
            let rule3 = "Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished."
            let rule4 = "Do **__NOT__** post any inappropriate/NSFW content. This includes videos, images, links, emojis, profile pictures, usernames/nicknames, and discussion of overly-sexual content. Be mindful that there are younger members of the discord and that certain conversations may make people uncomfortable."
            let rule5 = "Do not dox or post any irl personal information about anyone, or post any unsafe links such as IP grabbers or scams. **(Doing so will get you immediately banned from the server.)**"
            let rule6 = "Do not spam in channels and don't spam/mass ping people unnecessarily, especially other creators. **Do not ping Oasis (Swiftblade)** for any reason either (this also includes trying to @/everyone and spam reacting). "
            let rule7 = "Use the text channels in their correct use. For example, only use bot commands in <#903523421042929674>"
            let rule8 = "Do not discuss topics that tend to make people uncomfortable. This includes topics such as self-harm, intense political discussions and beliefs that would offend people, and extreme over-sexualization of individuals. This also applies to cheats/hack client naming for Minecraft, and other illegal practices such as account trading, etc."
            let rule9 = "Do not be disruptive in voice channels. This includes spam hopping channels, being excessively loud/annoying, and playing soundboards."
            let rule10 = "Use common sense! (Do not advertise/self promote, try and find loopholes, joke about being under 13, purposely confusing/upsetting others, etc.) "
            let rule11 = "Ban evasion and mute evasion are **__not allowed__**. If you are caught doing this, your main account's punishment will be extended."
            let rule12 = "Do not discuss or ask about other members' punishments, and don't ping or make fun of those that are muted (other people’s bans, mutes, etc.)"
            let rule13 = "Make sure you follow the [Discord TOS](https://discord.com/terms) (Click) and [Community Guidelines](https://discord.com/guidelines) (Click)."

        // const embed = new Discord.MessageEmbed()
        //     .setTitle(`${message.guild.name} - Server Rules`)
        //     .setColor(colors.MUSIC)
        //     .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //     .addField("Rule 1", 'Be respectful. Do not argue with, harass or bully any member of the discord. Any form of racism, sexism, homophobia, transphobia, etc. (including derogatory terms) will get you punished.')
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

        const rule1embed = new Discord.MessageEmbed()
        .setAuthor('Rule 1', 'https://i.imgur.com/LuTh0jv.jpg')
        .setColor(colors.TRANSPARENT)
        .setDescription(rule1)

        const rule2embed = new Discord.MessageEmbed()
        .setAuthor('Rule 2', 'https://i.imgur.com/LuTh0jv.jpg')
        .setColor(colors.TRANSPARENT)
        .setDescription(rule2)

        message.channel.send(rule1embed)
        message.channel.send(rule2embed)
           
    }
}