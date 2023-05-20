const Discord = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');
const fetch = require('node-fetch').default;

module.exports = {
    name: 'info',
    aliases: ['i'],
    category: 'Information',
    timeout: 5000,
    description: 'Gives specific information on a specific function of the server',
    usage: `info <levels, roles, oasis, aquasis, content-creator>`,
    run: async (bot, message, args) => {
        let usage = `${config.prefix}info <levels, roles, oasis, aquasis, rings, content-creator>`

        if(!args[0]) return message.channel.send(`Invalid Syntax. \`${usage}\``);
        if(!['levels', 'roles', 'oasis', 'aquasis', 'rings', 'content-creator'].includes(args[0])) return message.channel.send(`Invalid Argument/Syntax. \`${usage}\``);
        if(args[0] == 'levels'){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Level System`)
            .setColor(colors.MUSIC)
            .setDescription(`The leveling system here in Oasis's Resort is unique to other servers, as it is completely custom. As you level up, you will start to gain more xp, getting you closer to that next level rank!\n\n**HOW IT WORKS** - Each user will gain a range of xp per minute. Once you gain xp, a timer will start, preventing you from gaining xp until after *one minute*, when the timer goes away. Some channels in the server are **XP disabled**, meaning you CANNOT gain xp in those channels. Looking in the channel topic will help determine if you can gain xp there or not. As you level up, you can gain perks! You can check out those perks in the <#903524420826591272> channel!\n\n**LEVEL MILESTONES** - These levels are the **milestones** of the server:\n\nLevel 5\nLevel 10\nLevel 15\nLevel 20\nLevel 25\nLevel 30\nLevel 35\nLevel 40\nLevel 45\nLevel 50\nLevel 55\nLevel 60\nLevel 65\nLevel 70\nLevel 75\n\nSome of those milestones comes with perks for you to enjoy for leveling up! More perks will come in the future! :)\n\nIf you have any questions, please open a ticket in <#903739112027197441> and a staff member will gladly help you!`)
            .setFooter(`Information Cards - Leveling`)

            message.channel.send(embed)
        }

        if(args[0] == 'roles'){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Roles`)
            .setColor(colors.MUSIC)
            .setDescription(`There are tons of roles in this server that define your profile here in Oasis's Resort. Like content creators, artists, boosters, and more! This info card will answer any questions you may have about these ranks.\n\n**How do I get the creator/youtube role?**\n\nIn order to obtain the <@&756952143776186460> role, you must have a following of 1,000 or more on either Twitch or Youtube! Your channel must also have minecraft-focused content, reasonable viewership (500+ within a few days of release), and an active channel with original and reasonable quality content. To get the <@&896080274134286337> role, you must have a following of 30,000 or more on either Twitch or YouTube! You must have minecraft-focused content, but frequest gaming-focused content on your channel, as well as a reasonable viewership (5000+ within a few days of release on ALL videos), and an active channel producing original and reasonable quality content. **NOTE:** Admins can still decline your request, even if you meet the requirements. Please read the requirements and confirm that you meet them BEFORE applying. **SHORTS CHANNELS ARE REQUIRED TO HAVE 5k+ SUBSCRIBERS AND 2k+ VIEWS PER VIDEO WITHIN A FEW DAYS OF RELEASE.** Open a ticket to apply!\n\n**How do I get roles like veteran, artists, and booster?**\n\nFor the <@&870057943398248478> role, you must have been a notable member from 2019 or prior. **DO NOT ASK FOR THIS ROLE**, it is non-obtainable.\n\nTo get the artist rank, you can create fanart and submit it in the <#903523861046394921> channel! **Must be original!**\n\nTo get the <@&869916474448441405> rank, you must boost the server at least once!\n\n**How do I get moderator/admin?**\n\nFirst, you must wait until staff applications are open and you must meet the requirements listed! If your application is unique and well-written, you will be moving on the the interviews! Once you pass that, you get helper for a undisclosed amount of time! Then, you can work your way up by being a good influence on the community! The current staff ranks are: <@&756950810578911372>, <@&757838930770001940>, <@&756950808427364392>, <@&934810508698214470>, and <@&825974296663818250>! These can change at any time!`)
            .setFooter(`Information Cards - Roles`)

            message.channel.send(embed)
        }

        if(args[0] == 'oasis'){

            const guild = bot.guilds.cache.get("755968485854675065")
            let apiKey = "AIzaSyCS6OtPWTMBgeJPCp1ylptV2BMdLaYHYuo"
            let oasis = "UCUrQNbRe851N0MIVxOGZQjQ"

            const resolveYT = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${oasis}&key=${apiKey}`)
            const dataYT = await resolveYT.json()

            let subCount = dataYT["items"][0].statistics.subscriberCount;

            function kFormatter(num){
                const regExp = new RegExp('^-?\\d+(?:\.\\d{0,' + (1 || -1) + '})?');
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000)).toString().match(regExp)[0] + 'K' : Math.sign(num) * Math.abs(num);
            }

            let subCountReal = kFormatter(subCount);

            const resolveTWITCH = await fetch(`https://api.crunchprank.net/twitch/followcount/itsoasislive`)
            const dataTWITCH = await resolveTWITCH.json()

            let followerCount = kFormatter(dataTWITCH)

            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Oasis Information`)
            .setColor(colors.MUSIC)
            .setDescription(`**OASIS INFO**\n\nYouTube Subscribers: ${subCountReal}\nTwitch Followers: ${followerCount}\nOasis's Boundaries: [Click Here](https://oasisyt.carrd.co/#begin)\nMain YouTube: [Click Here](https://www.youtube.com/itsoasis)\nShorts Channel: [Click Here](https://www.youtube.com/channel/UCmyFKHoKqoJCEdi9qWbFORQ)\nMusic Channel: [Click Here](https://www.youtube.com/watch?v=b4hQknmOQWc)\n\nMore information will be here soon. Updates will be posted in the server.`)
            .setFooter(`Information Cards - Oasis **|** ${config.signature}`)

            message.channel.send(embed)
        }

        if(args[0] == 'aquasis'){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Aquasis`)
            .setColor(colors.MUSIC)
            .setDescription(`Aquasis is a custom-coded bot for **${message.guild.name}**! It has some awesome features to keep the server safe!\n\n**A bit about the developer**\n\nThis bot is completely coded by <@274021702411747328>! IStay has been in this server a day after it was released, as well as being in the **OLD** server! He has been a friend of Oasis's for a long time now! <3 If you are ever having a hard time, his dms are always open to talk <3\n\n**Got suggestions?**\n\nIf you have any suggestions for this bot, leave them in <#1006651258280624230>!\n\n*Note: Please do not consider Aquasis as a scam bot, because it isn't! Aquasis will not ask for any account information or personal information, please watch for the bot tag and custom role icon, only exclusive to the bot itself!*`)
            .setFooter(`Information Cards - Aquasis | ${config.signature}`)

            message.channel.send(embed)
        }

        if(args[0] == 'rings'){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Rings`)
            .setColor(colors.MUSIC)
            .setDescription(`Rings are the server's currency! You earn rings as you chat, or participate in server events! You can check your rings by using the \`>bal\` command!`)
            .setFooter(`Information Cards - Rings | ${config.signature}`)

            message.channel.send(embed)
        }

        if(args[0] == 'content-creator'){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} - Content Creator Requirements`)
            .setColor(colors.MUSIC)
            .setDescription('If you are sure you meet the requirements (see <#903524420826591272>), apply by creating a new ticket in <#903739112027197441>\n\n**⤷** <@&756952143776186460> role **requirements:**\n- For gaming channels with new Minecraft-focused content.\n- A reasonable number of views per video (500 or more views within a few days of release on all videos).\n- An active YouTube channel producing **__original content__** of a __reasonable quality.__\n\n**⤷** <@&896080274134286337> role **requirements:**\n-  For channels with new - though still some existing - Minecraft-focused content, but frequent gaming-focused content.\n-  A reasonable number of views per video (5000 or more views within a few days of release on all videos).\n- An active YouTube channel producing **__original content__** of a __reasonable quality.__\n\nNote: To be able to apply for either role, you must be a member of the discord server for a minimum of 45 days before applying. Shorts channels are handled on a case by case basis and will require significantly higher requirements than those listed above.\n\n**Please note that channels meeting these requirements are still not guaranteed a role. All creator roles are decided on a case by case basis following reviews and consideration by the administration team, and we may decline giving a rank for any reason.*')
            .setFooter(`Information Cards - Content Creator | ${config.signature}`)

            message.channel.send(embed)

        }


           
    }
}