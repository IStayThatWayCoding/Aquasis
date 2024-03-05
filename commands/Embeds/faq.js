const Discord = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')
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

            let faq1 = '**About**\n\nAge: 19\nPronouns: She/Her\nFavorite Colors: Pastel blue, pastel pink, sky blue, aqua, and black\nFavorite Mainstream Music Artists: Juice WRLD, The Kid LAROI, Post Malone, YENA, Sleeping With Sirens, Kellin Quinn, and Bring Me The Horizon.\nFavorite Mainstream Song: The Kid LAROI - Stay (ft. Justin Bieber)\nFavorite Games: Minecraft, Super Smash Bros. Ultimate, and **TONS of Sonic games.**\nFavorite Sonic Song(s): "Reach For The Stars" from Sonic Colors, "I\'m Here: Revisited" from Sonic Frontiers, "Undefeatable" from Sonic Frontiers, and "Knight of The Wind" from Sonic and The Black Knight'
            let faq2 = "**Boundaries**\n\n**[⚠️]** [**OFFICIAL** Boundaries](https://oasisyt.carrd.co/)"
            let faq3 = "**Controls/DPI/Sens**\n\nDPI: 400\nMC Sens: 91\nFOV: 70 (1.8) + Dynamic FOV On\nFOV: 90 (1.20) + Dynamic FOV Off\n\n**__Controls:__**\nDrop Item: C\nMove: WASD\nInventory: E\nOptifine/Lunar Zoom: X\nPerspective Mod: ALT\nSprint: CTRL\nOffhand (1.20): V\nThird Person: Side Mouse Button 2\nHotbar: 1 - 5 are defualt\n- 6: Q\n- 7: F\n- 8: R\n- 9: Side Mouse Button 1\n\n(1.7) View Bobbing: On\n(1.8 & 1.20+) View Bobbing: Off"
            let faq4 = "**Mouse/Keyboard**\n\nMouse: Logitech G Pro Wireless Superlight\nKeyboard: A custom made keyboard by MinuteTech"
            let faq5 = "**How do I apply for <@&756952143776186460> or <@&896080274134286337> role?**\n\nRun `>info content-creator` in <#903523421042929674> to see info"
            let faq6 = "**When is the next Discord/Minecraft event or competition?**\n\nWe currently do not have a fixed events schedule, so please just keep an eye out in ⁠<#903529298969907221> for regular updates on the next Community event."
            let faq7 = "**Can I apply to be a member of Staff on the Discord server?**\n\nYou will be able to apply for a Staffing position whenever Staff Applications are open. When they are open, you will receive a notification in <#903524236524675102> where you can then fill in an application form. If Staff Applications are not open, you will not be able to apply for a staff role."
            let faq8 = "**Can I record a video with Oasis (Swiftblade)?**\n\nSadly, you cannot. Oasis (Swiftblade) has a very busy schedule and would rather be left undisturbed."
            let faq9 = "**Can I ping Oasis (Swiftblade) or a Creator?**\n\nNo. If you do, you will be punished. Please read the ⁠<#756718628207984760> for a thorough understanding."
            let faq10 = '**What resourcepack did Oasis (Swiftblade) use in Vitalasy\'s "I Built a Bedrock Prison in Survival Minecraft" video?**\n\nShadow 16x by Aedo'
            let faq11 = "**What Minecraft client does Oasis use?**\n\n__1.20__:\n- Lunar Client\n- Fabric\n\n__1.8__:\n- Lunar Client\n- Forge (for thumbnails only)\n\n__1.7__:\n- Lunar Client\n- Cheatbreaker Client"
            let faq12 = "**What Minecraft version and gamemodes does Oasis primarily play for PvP?**\n\nOasis mostly plays pvp on 1.7/1.8, but she plays 1.20 pvp as well.\n\n1.7: Nodebuff, Boxing, and BuildUHC (Minemen Club)\n1.8: Skywars, Duels, and rarely Bedwars (Hypixel)\n1.20: Netherpot, OP, Sword, and Lifesteal UHC"
            let faq13 = "**What does Oasis use for recording/editing/thumbnails?**\n\nRecording: OBS\nEditing: Adobe Premiere Pro, Sony Vegas, After Effects, and ReplayMod for Minecraft\nThumbnails: Photoshop, and CustomNPCs Mod for Minecraft"
            let faq14 = "**Who made the Discord server icon and banner?**\n\nCurrent server icon: N/A\n\nCurrent server banner: Sonic Team\n\nCurrent <@1004762780508880986> pfp: @kur0na._.\n\n*Last Updated: March 5, 2024*"
            let faq15 = "**I have a question relating to Oasis and Lifesteal...?**\n\nOasis made an FAQ for that in [this tweet](https://twitter.com/ItsOasisMC/status/1600916557651218476?t=Sqq15_E9b1WdqPSRV38qRA&s=19)\n\nNote: This mostly applies to Seasons 1 and 2. This may likely change in the future."
            let faq16 = "**How does Oasis (Swiftblade) have her renders in videos? (motion blur, smooth gameplay, etc)**\n\nShe records her videos at 240FPS or 360FPS using OBS depending on the footage needed and what game is being recorded (Minecraft or a Sonic game). This is then rendered into 60FPS in Sony Vegas Pro with special settings and a LUT filter that changes the color space format. The final rendered footage is then imported into Adobe Premiere Pro (or After Effects) to be edited. The quality of the final 4K resolution video is usually professional grade with external software used (that's a secret!)."
            let faq17 = "**Why is Oasis also known as Swiftblade?**\n\nSwiftblade is the name of her OC (original character) and the name of her 2nd YouTube channel."

        const faq1embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 1', 'https://i.imgur.com/ExVt149.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq1)

        const faq2embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 2', 'https://i.imgur.com/i00Y6On.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq2)

        const faq3embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 3', 'https://i.imgur.com/QBTM5e0.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq3)

        const faq4embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 4', 'https://i.imgur.com/fyyhitM.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq4)
        
        const faq5embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 5', 'https://i.imgur.com/V8HGI92.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq5)
        
        const faq6embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 6', 'https://i.imgur.com/DADmfaU.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq6)
        
        const faq7embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 7', 'https://i.imgur.com/Ydz2tUy.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq7)
        
        const faq8embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 8', 'https://i.imgur.com/fRZznc4.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq8)
        
        const faq9embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 9', 'https://i.imgur.com/rb8tUoA.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq9)
        
        const faq10embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 10', 'https://i.imgur.com/zewbedC.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq10)
        
        const faq11embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 11', 'https://i.imgur.com/E77a9nu.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq11)
        
        const faq12embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 12', 'https://i.imgur.com/frzALHM.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq12)
        
        const faq13embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 13', 'https://i.imgur.com/o6VPP4p.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq13)

        const faq14embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 14', 'https://i.imgur.com/fDExAHO.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq14)

        const faq15embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 15', 'https://i.imgur.com/mcNsSUp.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq15)

        const faq16embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 16', 'https://i.imgur.com/8jVsXVa.png')
        .setColor(colors.RULESEMBED)
        .setDescription(faq16)

        const faq17embed = new Discord.MessageEmbed()
        .setAuthor('FAQ 17', 'https://i.imgur.com/NUl8FwV.jpg')
        .setColor(colors.RULESEMBED)
        .setDescription(faq17)
        .setFooter(config.signature)

        
        message.channel.send({
            files: [
                './FAQoasis.jpg'
            ]
        })

        setTimeout(function(){
            message.channel.send(faq1embed)
            message.channel.send(faq2embed)
            message.channel.send(faq3embed)
            message.channel.send(faq4embed)
            message.channel.send(faq5embed)
            message.channel.send(faq6embed)
            message.channel.send(faq7embed)
            message.channel.send(faq8embed)
            message.channel.send(faq9embed)
            message.channel.send(faq10embed)
            message.channel.send(faq11embed)
            message.channel.send(faq12embed)
            message.channel.send(faq13embed)
            message.channel.send(faq14embed)
            message.channel.send(faq15embed)
            message.channel.send(faq16embed)
            message.channel.send(faq17embed)
        }, 5000)
    



           
    }
}