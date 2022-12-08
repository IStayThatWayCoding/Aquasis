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