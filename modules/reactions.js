const fetch = require('node-fetch');
const path = require('path');
const config = require('../config.json');

require('dotenv').config()

module.exports = async (bot) => {
    bot.on('messageReactionAdd', (reaction, user) => {
        console.log("ADD")
    })

    bot.on('messageReactionRemove', (reaction, user) => {
        console.log("REMOVE")
    })

}