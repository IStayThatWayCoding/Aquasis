const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs');
const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const distube = require('./modules/distube');
const chalk = require('chalk');
const message = require('./events/message');

require('dotenv').config()



bot.distube = new DisTube(bot, {
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    searchSongs: 5,
    searchCooldown: 30,
    leaveOnEmpty: true,
    leaveOnFinish: false,
    leaveOnStop: true,
    youtubeDL: false,
});

require('console-stamp')(console, {
    format: `${chalk.yellow(':date(yyyy-mm-dd HH:MM:ss.l Z,true)' )} ${chalk.magenta(':label:')}`
})

distube(bot, message);

bot.setMaxListeners(0);
bot.categories = fs.readdirSync("./commands/");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
});

bot.login(process.env.TOKEN);