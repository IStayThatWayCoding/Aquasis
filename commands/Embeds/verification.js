const Discord = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')
const canvas = require('canvas')


module.exports = {
    name: 'verification',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'Verify Embed',
    usage: `verifyembed`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        let embed1 = new Discord.MessageEmbed()
        .setColor(colors.green_light)
        .setDescription(`<a:pepehand:1109587875269451987> Hello there and **welcome** to **${message.guild.name}!**\n\nIf you are having trouble with our verification system or you need information on how to verify, please read this message.\n\n\`----------\`\n\n**INFORMATION**\n\nA DM from <@1004762780508880986> (a discord **BOT** account, not a user account) should have been sent to your DMs with a captcha to solve. Solving this captcha by typing what the image says (case-sensitive) will let you into the server.\n\n\`----------\`\n\nFAQ\n\n\`My DMs are off, what do I do?\` - Well first let's turn off those DMs (temporarily)! Click on the server name on the top left and open the dropdown. Click on **Privacy Settings > Direct Messages > Turn on. Once verified, you can turn this setting back to what it was before.\n\n\`My DMs are on, but I didn't get a message from the bot!\` - This may be happening for one of the following reasons (or all of them)\n- The bot is experiencing downtime/maintenance\n- The system could have glitched and didn\'t send you a DM because another user could have joined at the same time.\n\n \`The bot sent me a DM, but I typed the captcha and nothing is happening! What do I do?\` - This could be happening to you because you read this message and the timer expired. Each user gets **1 minute** to complete the captcha or it\'s invalid (meaning that they would have to rejoin to get a new captcha.) All you have to do is **leave and rejoin** the server to get a new captcha puzzle.\n\nInvite link to join back: https://discord.gg/RtsZcajWCR**\n**If the captcha still isn\'t working and you\'ve tried this,** keep reading.\n\n\`So it appears the bot is down, what do I do next?\` - The bot developer will be aware of the situation and will try his best to get the bot back up and running again. If the bot is expected to be down for large amounts of time, we will conduct **manual verification.** Any user who wishes to be verified must DM and admin or above to get into the server! Please wait for at least 30 minutes to an hour after the bot is down to DM a staff member :)\n\n\`I don\'t understand what to do! Can you help?\` - Why of course! I have made an example (for those visual learners) to get help! View that [here](https://gyazo.com/1bc307a34e8669688fced17c73ecfd5a)`)

        let embed2 = new Discord.MessageEmbed()
        .setColor(colors.red_light)
        .setDescription('**IMPORTANT**\n\n**__Alright, so nothing is working, and I need help. What do I do?__** - If the above solution(s) have not worked for you, DM <@274021702411747328> (bot developer) and we will get things solved for you!\n\n**DO NOT DM OTHER MEMBERS FOR HELP!**')
        .setFooter(config.signature)

        message.channel.send({
            files: [
                './oasisVERIFY.jpg'
            ]
        })

        setTimeout(function(){
            message.channel.send(embed1)
            message.channel.send(embed2)
        }, 5000)
    



           
    }
}