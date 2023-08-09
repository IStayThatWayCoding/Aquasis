const Discord = require('discord.js')
const colors = require('../../colors.json')
const canvas = require('canvas')


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
            let rule3 = "Swearing/cursing is strongly discouraged and may result in a warn/mute, especially if done excessively. This server is meant to be PG. Slurs of **__ANY KIND__** are prohibited and will result in immediate punishment."
            let rule4 = "Do **__NOT__** post any inappropriate/NSFW content. This includes videos, images, links, emojis, profile pictures, usernames/nicknames, and discussion of overly-sexual content. Be mindful that there are younger members of the discord and that certain conversations may make people uncomfortable."
            let rule5 = "Do not dox or post any irl personal information about anyone, or post any unsafe links such as IP grabbers or scams. **(Doing so will get you immediately banned from the server.)**"
            let rule6 = "Do not spam in channels and don't spam/mass ping people unnecessarily, especially other creators. **Do not ping Oasis (Swiftblade)** for any reason either (this also includes trying to @/everyone and spam reacting). "
            let rule7 = "Use the text channels in their correct use. For example, only use bot commands in <#903523421042929674>"
            let rule8 = "Do not discuss topics that tend to make people uncomfortable. This includes topics such as self-harm, intense political discussions and beliefs that would offend people, and extreme over-sexualization of individuals. This also applies to cheats/hack client naming for Minecraft, and other illegal practices such as account trading, etc."
            let rule9 = "Do not be disruptive in voice channels. This includes spam hopping channels, being excessively loud/annoying, and playing soundboards."
            let rule10 = "Use common sense! (Do not advertise/self promote, try and find loopholes, joke about being under 13, purposely confusing/upsetting others, etc.) "
            let rule11 = "Ban evasion and mute evasion are **__not allowed__**. If you are caught doing this, your main account's punishment will be extended."
            let rule12 = "Do not discuss or ask about other members' punishments, and don't ping or make fun of those that are muted (other people’s bans, mutes, etc.)"
            let rule13 = "Please make sure you follow the [Discord TOS](https://discord.com/terms) (Click) and [Community Guidelines](https://discord.com/guidelines) (Click). Failure to comply to these terms may get your account terminated!"


            let banner = 'https://media.discordapp.net/attachments/903543603589173249/1109559261572382800/image.png'
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

        const welcomeembed = new Discord.MessageEmbed()
        .setAuthor('Welcome!', 'https://i.imgur.com/z3Ppq8B.png')
        .setColor(colors.TRANSPARENT)
        .setDescription("Welcome to **Oasis's (Swiftblade's)** Official Discord Server! Please ensure that you follow these simple rules.\n\nPlease keep this server to English & Spanish only.")

        const rule1embed = new Discord.MessageEmbed()
        .setAuthor('Rule 1', 'https://i.imgur.com/ExVt149.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule1)

        const rule2embed = new Discord.MessageEmbed()
        .setAuthor('Rule 2', 'https://i.imgur.com/i00Y6On.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule2)

        const rule3embed = new Discord.MessageEmbed()
        .setAuthor('Rule 3', 'https://i.imgur.com/QBTM5e0.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule3)

        const rule4embed = new Discord.MessageEmbed()
        .setAuthor('Rule 4', 'https://i.imgur.com/fyyhitM.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule4)
        
        const rule5embed = new Discord.MessageEmbed()
        .setAuthor('Rule 5', 'https://i.imgur.com/V8HGI92.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule5)
        
        const rule6embed = new Discord.MessageEmbed()
        .setAuthor('Rule 6', 'https://i.imgur.com/DADmfaU.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule6)
        
        const rule7embed = new Discord.MessageEmbed()
        .setAuthor('Rule 7', 'https://i.imgur.com/Ydz2tUy.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule7)
        
        const rule8embed = new Discord.MessageEmbed()
        .setAuthor('Rule 8', 'https://i.imgur.com/fRZznc4.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule8)
        
        const rule9embed = new Discord.MessageEmbed()
        .setAuthor('Rule 9', 'https://i.imgur.com/rb8tUoA.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule9)
        
        const rule10embed = new Discord.MessageEmbed()
        .setAuthor('Rule 10', 'https://i.imgur.com/zewbedC.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule10)
        
        const rule11embed = new Discord.MessageEmbed()
        .setAuthor('Rule 11', 'https://i.imgur.com/E77a9nu.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule11)
        
        const rule12embed = new Discord.MessageEmbed()
        .setAuthor('Rule 12', 'https://i.imgur.com/frzALHM.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule12)
        
        const rule13embed = new Discord.MessageEmbed()
        .setAuthor('Rule 13', 'https://i.imgur.com/o6VPP4p.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(rule13)

        const infoembed = new Discord.MessageEmbed()
        .setAuthor('Information', 'https://i.imgur.com/jn8YaUK.png')
        .setColor(colors.TRANSPARENT)
        .setDescription('If you wish to report a member for breaking one of these rules, please feel free to create a ticket in <#903739112027197441>!\n\nThese rules are not exhaustive, if a staff member tells you not to do something, listen to them. If you want more clarification, or think something is wrong, please open a ticket in <#903739112027197441>.\n\nClick: [Get Roles](https://discord.com/channels/755968485854675065/903524741791506432/903759194941968414) **|** [FAQ](https://discord.com/channels/755968485854675065/903762303026085939) **|** [Chat](https://discord.com/channels/755968485854675065/903516143715778590) **|** [Suggest Aquasis Bot Changes](https://discord.com/channels/755968485854675065/1006651258280624230)')
        .setFooter('Aquasis | Developed with ❤️ by istay#5154')
        
        message.channel.send({
            files: [
                './embed.png'
            ]
        })

        setTimeout(function(){
            message.channel.send(welcomeembed)
            message.channel.send(rule1embed)
            message.channel.send(rule2embed)
            message.channel.send(rule3embed)
            message.channel.send(rule4embed)
            message.channel.send(rule5embed)
            message.channel.send(rule6embed)
            message.channel.send(rule7embed)
            message.channel.send(rule8embed)
            message.channel.send(rule9embed)
            message.channel.send(rule10embed)
            message.channel.send(rule11embed)
            message.channel.send(rule12embed)
            message.channel.send(rule13embed)
            message.channel.send(infoembed)
        }, 5000)
    



           
    }
}