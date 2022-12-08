const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs');
const chalk = require('chalk');
const message = require('./events/message');

require('dotenv').config()

require('console-stamp')(console, {
    format: `${chalk.yellow(':date(yyyy-mm-dd HH:MM:ss.l Z,true)' )} ${chalk.magenta(':label:')}`
})

bot.setMaxListeners(0);
bot.categories = fs.readdirSync("./commands/");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
});

bot.login(process.env.TOKEN);