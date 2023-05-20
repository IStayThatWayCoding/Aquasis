const Discord = require('discord.js')
const colors = require('../../colors.json')
const canvas = require('canvas')


module.exports = {
    name: 'faq',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'FAQ Embed',
    usage: `faq`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

            let faq1 = '**About**\n\nAge: 19\nPronouns: She/Her 🏳️‍⚧️\nFavorite Colors: Pastel blue, pastel pink, sky blue, aqua, and black\nFavorite Music Artist(s): Juice WRLD, The Kid LAROI, Post Malone, Memoria XI, etc.\nFavorite Song: The Kid LAROI - Stay (ft. Justin Bieber)\nFavorite Games: Minecraft, Super Smash Bros. Ultimate, and **TONS of Sonic games.**\nFavorite Theme Song: "Reach For The Stars" from Sonic Colors AND "I\'m Here" from Sonic Frontiers'
            let faq2 = "**Boundaries**\n\n[⚠️] [**OFFICIAL** Boundaries](https://oasisyt.carrd.co/)"
            let faq3 = "**Controls/DPI/Sens**\n\nDPI: 400\nMC Sens: 91\nFOV: 70 (1.8) + Dynamic FOV On\nFOV: 90 (1.19) + Dynamic FOV Off\n\n**__Controls:__**\nDrop Item: C\nMove: WASD\nInventory: E\nOptifine/Lunar Zoom: X\nPerspective Mod: ALT\nSprint: CTRL\nOffhand (1.19): V\nThird Person: Side Mouse Button 2\nHotbar: 1 - 5 are defualt\n- 6: Q\n- 7: F\n- 8: R\n- 9: Side Mouse Button 1\n\n(1.7) View Bobbing: Off\n(1.8 & 1.19) View Bobbing: off"
            let faq4 = "**Mouse/Keyboard**\n\nMouse: Logitech G Pro Wireless Superlight\nKeyboard: A custom made keyboard by MinuteTech"
            let faq5 = ""
            let faq6 = ""
            let faq7 = ""
            let faq8 = ""
            let faq9 = ""
            let faq10 = ""
            let faq11 = ""
            let faq12 = ""
            let faq13 = ""
            let faq14 = ""
            let faq15 = ""


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
                './FAQoasis.png'
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