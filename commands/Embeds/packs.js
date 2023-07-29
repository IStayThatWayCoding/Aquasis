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
        let pack1_title = "ItsOasis Animated [16x] - 800 Pack [1.8]"
        let pack1_maker = "Niotic"
        let pack1_released = "August 2019"
        let pack1_link = "http://pack1.istaythatway.com"
        let pack1_thumbnail = "https://i.imgur.com/bnsRgyY.jpg"

        let pack1embed = new Discord.MessageEmbed()
        .setTitle(pack1_title)
        .setImage(pack1_thumbnail)
        .addField('Pack Maker', pack1_maker)
        .addField('Released', pack1_released)
        .addField('Download:', pack1_link)
        .setFooter(config.signature)

        message.channel.send(pack1embed)

    }
}