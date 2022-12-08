const fetch = require('node-fetch').default;
const path = require('path')

module.exports = async (bot) => {

    const guild = bot.guilds.cache.get("755968485854675065")

    setInterval(async () => {
        const resolve = await fetch("https://api.crunchprank.net/twitch/followcount/itsoasislive")
        const data = await resolve.json();
        console.log(data);

        function kFormatter(num){
            const regExp = new RegExp('^-?\\d+(?:\.\\d{0,' + (1 || -1) + '})?');
            return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000)).toString().match(regExp)[0] + 'K' : Math.sign(num) * Math.abs(num);
        }

        let followerCount = kFormatter(data);

        let vc = guild.channels.cache.get("1006433607222575155");

        vc.setName(`Twitch: ${followerCount}`).catch(err => console.error(`${path.basename(__filename)} There was a problem changing the channel follower name: `, err))
    }, 600000)



}