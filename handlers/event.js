// fs.readdir('./events/', (err, files) => {
//     if (err) return console.error;
//     files.forEach(file => {
//         if (!file.endsWith('.js')) return;
//         const evt = require(`./events/${file}`);
//         let evtName = file.split('.')[0];
//         bot.on(evtName, evt.bind(null, bot));
//         console.log(`Loaded event ${evtName}`);
//     });
// });

// bot.categories = fs.readdirSync("./commands/");
// bot.commands = new Discord.Collection();
// bot.aliases = new Discord.Collection();

const fs = require('fs');
const chalk = require('chalk')

module.exports = async (bot, Discord) => {

    fs.readdir('./events/', (err, files) => {
        if (err) return console.error;
        files.forEach(file => {
            if (!file.endsWith('.js')) return;
            const evt = require(`../events/${file}`);
            let evtName = file.split('.')[0];
            bot.on(evtName, evt.bind(null, bot));
            console.log(`${chalk.cyan(`Loaded event ${evtName}`)}`);
        });
    });
}