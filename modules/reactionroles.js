// const Discord = require('discord.js');
// const config = require('../config.json');
// const colors = require('../colors.json');

// module.exports = async (bot, message) => {
// console.log('test')
// // ---------------------------------------------------------------------------------------------------------------------------------------------- //
// //                                                          REACTION ROLES
// // ---------------------------------------------------------------------------------------------------------------------------------------------- //
// // if(message.content == `>reactions`){
// //     const he_him = message.guild.roles.cache.get('869924102482325504')
// //     const she_her = message.guild.roles.cache.get('869923953261547560')
// //     const they_them = message.guild.roles.cache.get('869924173420572682')
// //     const other_ask_me = message.guild.roles.cache.get('869924328270090252')
// //     const any_pronouns = message.guild.roles.cache.get('869924467143495732')
// //     const events = message.guild.roles.cache.get('903766322008195146')
// //     const shorts = message.guild.roles.cache.get('936105497994616832')
    
// //     const theChannel = message.guild.channels.cache.get('903543603589173249')
    
    
// //     const embed = new MessageEmbed()
// //         .setColor(colors.TRANSPARENT)
// //         .setDescription('🐟 ~ He/Him\n🐬 ~ She/Her\n🐳 ~ They/Them\n🌊 ~ Other/Ask Me\n💧 ~ Any Pronouns\n\n<a:oasisspin:1050143931775594576> ~ Events\n🚨 ~ YT Shorts Ping\n\n🤖 ~ Updates about Aquasis (bot)\n❌ ~ React to pause XP gaining')
    
// //         const reactionMessage = theChannel.send(embed)
    
// //         reactionMessage.react('🐟')
// //         reactionMessage.react('🐬')
// //         reactionMessage.react('🐳')
// //         reactionMessage.react('🌊')
// //         reactionMessage.react('💧')
// //         reactionMessage.react('<a:oasisspin:1050143931775594576>')
// //         reactionMessage.react('🚨')
// //         reactionMessage.react('🤖')
// //         reactionMessage.react('❌')
// // }


    
// // ---------------------------------------------------------------------------------------------------------------------------------------------- //
// // ---------------------------------------------------------------------------------------------------------------------------------------------- //
// // ---------------------------------------------------------------------------------------------------------------------------------------------- //
// }

const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch').default;

module.exports = async (bot, message) => {
    if(message.channel.id === "1007900121700257822") {
        if(!message.content.toLowerCase().includes('?', '>')){
            fetch(`https://api-monkedev.herokuapp.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response)
            })
            .catch(() => {
                let error = new MessageEmbed()
                .setTitle("Error!")
                .setColor("#E80909")
                .setDescription("AI Error: Couldn't fetch response! Please try a different input")
                .setFooter(`This is still in BETA. Report any issues in a ticket!`)

                message.channel.send(error)
                return;
            })
        }

    }
}