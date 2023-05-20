const fetch = require('node-fetch').default;
const path = require('path');
const memberCount = require('../modules/memberCount');
const rank_sort = require('../modules/rank_sort');
const subCount = require('../modules/subCount');
const mongo = require('../utils/mongoose');
const Canvas = require('canvas');
const getTwitchFollowers = require('../modules/getTwitchFollowers');
const chalk = require('chalk')




module.exports = async (bot) => {

    function kFormatter1(num) {
        const regExp = new RegExp('^-?\\d+(?:\.\\d{0,' + (1 || -1) + '})?');
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000)).toString().match(regExp)[0] + 'K' : Math.sign(num) * Math.abs(num);
    }

    const guild = bot.guilds.cache.get("755968485854675065");

    const guildMemberCount = guild.memberCount;

    // const activities = [
    //     "oasis's animation",
    //     `about ${kFormatter1(guildMemberCount)}+ members`,
    //     "I Mastered EVERY Clutch in Minecraft",
    //     "for >help",
    // ]

    const activities = [
        'for >info',
        "for >help",
        "videos",
        `about ${kFormatter1(guildMemberCount)}+ members`,
    ]

    subCount(bot);
    memberCount(bot);
    rank_sort(bot);
    getTwitchFollowers(bot);

    Canvas.registerFont("./ulm_grotesk.ttf", { family: "grotesk" });

    console.log(`${chalk.green('Bot is online!')}`)

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];

        bot.user.setActivity(newActivity, {
            type: "WATCHING",
            status: 'online'
        })
    }, 60000)

    // bot.user.setStatus('idle')

    console.log(`${chalk.red('STOP! Did you add the new command(s) to the help command?')}`)
    await mongo().then(mongoose => {
        try {
            console.log(`${chalk.green('Database connected')}`);
        } catch (err) {
            console.error(`${path.basename(__filename)} Error with database: `, err);
        }
    });
}
