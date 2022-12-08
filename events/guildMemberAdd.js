const Discord = require('discord.js');
const Captcha = require('@haileybot/captcha-generator');
const moment = require('moment');

module.exports = async (bot, member, message, args) => {
    const guild = bot.guilds.cache.get("755968485854675065")
    const verifyChannel = guild.channels.cache.get('903783944783298570')

    if(member.bot){
        return;
    }

    let welcomeMessage = new Discord.MessageEmbed()
    .setTitle(`VERIFY`)
    .setColor("RANDOM")
    .setDescription(`<@${member.id}> - A verification message has been sent to your DMS. If they are off, turn them off temporarily, and then rejoin.`)
    .setFooter(`This message will delete in 30 seconds.`)

    verifyChannel.send(welcomeMessage).then(m => m.delete({ timeout: 30000 }))
    verifyChannel.send(`<@${member.id}>`).then(m => m.delete({ timeout: 3000 }))

    let captcha = new Captcha()

    const attachment = new Discord.MessageAttachment(captcha.PNGStream, "captcha.png")
    
    let verificationMessage = new Discord.MessageEmbed()
    .setTitle(`Human Verification Required!`)
    .setDescription(`Hey there! I am here to inform you that you need to verify yourself to gain access to the server. Please type the captcha below, and you will be allowed in! Please note that this captcha is case-sensitive and upper-case only! Also, this message will self-destruct in **1 MINUTE**! Rejoin the server to get a new captcha.`)
    .attachFiles(attachment)
    .setImage(`attachment://captcha.png`)
    .setColor('#FF0000')

    member.send(verificationMessage)
    .catch(() => verifyChannel.send(`${member} has DMs off!`).then(m => m.delete({ timeout: 10000 })))
    member.createDM().then(dmchannel => {
        const collector = new Discord.MessageCollector(dmchannel, m => m.id === m.id, { time: 60000 });
        collector.on("collect", m => {
            if(m.content === captcha.value) {
                let success = new Discord.MessageEmbed()
                .setTitle(`✅ - You're In!`)
                .setDescription(`You have successfully completed the verification process! You will now gain access to the server.`)
                .setColor(`#32CD32`)
                .setFooter(`If this didn't work, rejoin the server to get a new captcha.`)
                member.send(success)
                .catch(() => verifyChannel.send(`${member} has DMs off!`).then(m => m.delete({ timeout: 10000 })))

                const verifyID = "756954432364609636"
                const verifiedRole = guild.roles.cache.find(r => r.id === verifyID)
                member.roles.add(verifiedRole);
            }
        })
    })

    let WelcomeLogEmbed = new Discord.MessageEmbed()
        .setTitle(member.guild.name)
        .setDescription(`Latest information about the member that joined!`)
        .setThumbnail(member.user.displayAvatarURL({
            dynamic: true,
            size: 512
        }))
        .addFields({
            name: 'User Tag',
            value: `${member}`,
            inline: true
        }, {
            name: 'Discriminator',
            value: `${member.user.discriminator}`,
            inline: true
        }, {
            name: 'Bot',
            value: `${member.user.bot}`
        }, {
            name: 'Presence',
            value: `${member.user.presence.status}`,
            inline: true
        }, {
            name: 'Joined Server At',
            value: `${moment(member.joinedAt).format('MM/DD/YYYY')}`,
            inline: true
        }, {
            name: 'Joined Discord At',
            value: `${moment(member.user.createdAt).format('MM/DD/YYYY')}`,
            inline: true
        }, )
        .setFooter(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL({
            dynamic: true,
            size: 512
        }))
        .setColor('RANDOM')
        .setTimestamp()

        let channel = guild.channels.cache.get("903543603589173249")
        channel.send(WelcomeLogEmbed);
}