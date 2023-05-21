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
        .setDescription('Due to the nature of how pronouns can be very diverse, Starfall Islands only offers certain pronoun roles to avoid too many cluttered roles. If your pronouns are different from these, you can select "Ask for Pronouns" or "Pronouns in Bio" so that other members can know your pronouns.\n\n1️⃣ ~ He/Him\n2️⃣ ~ She/Her\n3️⃣ ~ They/Them\n4️⃣ ~ It/Its\n5️⃣ ~ He/They\n6️⃣ ~ She/They\n7️⃣ ~ Neos\n8️⃣ ~ Ask Me\n9️⃣ ~ Pronouns in Bio\n\n<a:oasisspin:1050143931775594576> ~ Events\n🚨 ~ YT Shorts Ping\n\n🤖 ~ Updates about Aquasis (bot)\n❌ ~ React to pause XP gaining')
    

        message.channel.send({
            files: [
                './reaction_roles.jpg'
            ]
        })

        setTimeout(function(){
            message.channel.send(embed)
        }, 5000)
    



           
    }
}