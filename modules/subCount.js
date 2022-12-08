const Discord = require('discord.js')
const fetch = require('node-fetch').default;
const path = require('path');

module.exports = async (bot) => {
    const guild = bot.guilds.cache.get("755968485854675065")
    let apiKey = "AIzaSyCS6OtPWTMBgeJPCp1ylptV2BMdLaYHYuo"
    let oasis = "UCUrQNbRe851N0MIVxOGZQjQ"

    setInterval(async () => {
        const resolve = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${oasis}&key=${apiKey}`)
        const data = await resolve.json();
        console.log(data);

        let subCount = data["items"][0].statistics.subscriberCount;

        function kFormatter(num){
            const regExp = new RegExp('^-?\\d+(?:\.\\d{0,' + (1 || -1) + '})?');
            return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000)).toString().match(regExp)[0] + 'K' : Math.sign(num) * Math.abs(num);
        }

        let subCountReal = kFormatter(subCount);

        let vc = guild.channels.cache.get("1006053870293753937");

        vc.setName(`YouTube: ${subCountReal}`).catch(err => console.error(`${path.basename(__filename)} There was a problem changing the channel sub name: `, err))

    }, 600000)
}