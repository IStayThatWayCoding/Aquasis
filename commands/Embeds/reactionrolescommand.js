const Discord = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')
const canvas = require('canvas')


module.exports = {
    name: 'reactionembed',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'Reaction Embed',
    usage: `reactionembed`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        const embed = new Discord.MessageEmbed()
        .setColor(colors.TRANSPARENT)
        .setDescription('🐟 ~ He/Him\n🐬 ~ She/Her\n🐳 ~ They/Them\n🌊 ~ Other/Ask Me\n💧 ~ Any Pronouns\n\n<a:oasisspin:1050143931775594576> ~ Events\n🚨 ~ YT Shorts Ping\n\n🤖 ~ Updates about Aquasis (bot)\n❌ ~ React to pause XP gaining')
    

        message.channel.send({
            files: [
                './reaction_roles.jpg'
            ]
        })

        setTimeout(function(){
            message.channel.send(embed1)
        }, 5000)
    



           
    }
}