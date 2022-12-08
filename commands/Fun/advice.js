const axios = require('axios');
const getRandomUA = require('../../utils/getRandomUA');
const { MessageEmbed } = require('discord.js')
const colors = require('../../colors.json')


module.exports = {
    name: 'advice',
    category: 'Fun',
    description: 'Gives you advice <3',
    timeout: 5000,
    usage: `advice`,
    run: async (bot, message, args) => {
        const { data } = await axios('https://api.adviceslip.com/advice', {
            headers: {
                "User-Agent": getRandomUA(),
            },
        });

        const embed = new MessageEmbed()
        .setColor(3092790)
        .setDescription(data.slip.advice);
        message.channel.send(embed)
           
    }
}