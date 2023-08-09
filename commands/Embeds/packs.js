const Discord = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')
const canvas = require('canvas')

module.exports = {
    name: 'packs',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'Texture Pack Embed',
    usage: `packs`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        
        // Pack 1 Information
        let pack1_title = "ItsOasis Animated [16x] - 800 Pack"
        let pack1_version = "1.8"
        let pack1_maker = "Niotic"
        let pack1_released = "August 2019"
        let pack1_link = "http://pack1.istaythatway.com"
        let pack1_thumbnail = "https://i.imgur.com/bnsRgyY.jpg"

        // Pack 2 Information
        let pack2_title = "Lazuli [16x] - 2,000 Pack"
        let pack2_version = "1.8"
        let pack2_maker = "Niotic"
        let pack2_released = "December 2019"
        let pack2_link = "http://pack2.istaythatway.com"
        let pack2_thumbnail = "https://i.imgur.com/izlFZM8.png"

        // Pack 3 Information
        let pack3_title = "Aquarius [16x] - 3,000 Pack"
        let pack3_version = "1.8"
        let pack3_maker = "Niotic"
        let pack3_released = "June 2020"
        let pack3_link = "http://pack3.istaythatway.com"
        let pack3_thumbnail = "https://i.imgur.com/2SFUcL7.png"

        // Pack 4 Information
        let pack4_title = "Oasisfault [16x] - 5,000 Pack"
        let pack4_version = "1.8 & 1.18"
        let pack4_maker = "Miko"
        let pack4_released = "April 2021"
        let pack4_link1 = "http://pack4a.istaythatway.com"
        let pack4_link2 = "http://pack4b.istaythatway.com"
        let pack4_thumbnail = "https://i.imgur.com/i23a4Gf.png"

        let embedtitle = new Discord.MessageEmbed()
        .setTitle("◈ Pack Releases ◈")
        .setColor(colors.MUSIC)

        let pack1embed = new Discord.MessageEmbed()
        .setTitle(pack1_title)
        .setImage(pack1_thumbnail)
        .setColor(colors.blue_light)
        .addField('Version', pack1_version)
        .addField('Pack Maker', pack1_maker)
        .addField('Released', pack1_released)
        .addField('Download:', pack1_link)
        .setFooter(config.signature)

        let pack2embed = new Discord.MessageEmbed()
        .setTitle(pack2_title)
        .setImage(pack2_thumbnail)
        .setColor(colors.blue_dark)
        .addField('Version', pack2_version)
        .addField('Pack Maker', pack2_maker)
        .addField('Released', pack2_released)
        .addField('Download:', pack2_link)
        .setFooter(config.signature)

        let pack3embed = new Discord.MessageEmbed()
        .setTitle(pack3_title)
        .setImage(pack3_thumbnail)
        .setColor(colors.white)
        .addField('Version', pack3_version)
        .addField('Pack Maker', pack3_maker)
        .addField('Released', pack3_released)
        .addField('Download:', pack3_link)
        .setFooter(config.signature)

        let pack4embed = new Discord.MessageEmbed()
        .setTitle(pack4_title)
        .setImage(pack4_thumbnail)
        .setColor(colors.green_light)
        .addField('Version', pack4_version)
        .addField('Pack Maker', pack4_maker)
        .addField('Released', pack4_released)
        .addField('Download: (1.8)', pack4_link1)
        .addField('Download: (1.18)', pack4_link2)
        .setFooter(config.signature)

        message.channel.send(embedtitle)
        message.channel.send(pack1embed)
        message.channel.send(pack2embed)
        message.channel.send(pack3embed)
        message.channel.send(pack4embed)

    }
}