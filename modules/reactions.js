const fetch = require('node-fetch');
const path = require('path');
const config = require('../config.json');
const firstMessage = require('../first-message')

require('dotenv').config()

module.exports = async (bot) => {

    const channelID = '903524741791506432'

    firstMessage(bot, channelID, 'hello!', [])

    bot.on('messageReactionAdd', (reaction, user) => {
        console.log("ADD")
    })

    bot.on('messageReactionRemove', (reaction, user) => {
        console.log("REMOVE")
    })

}