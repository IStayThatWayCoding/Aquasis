const mongo = require('../../utils/mongoose');
const dailyRewardsSchema = require('../../schemas/daily-rewards');
const balance = require('../../schemas/balance');
const {
    MessageEmbed
} = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');

// Array of member Ids who have claimed their daily rewards in the last 24 hours
// Resets every 10 minutes

let claimedCache = []

const clearCache = () => {
    claimedCache = []
    setTimeout(clearCache, 1000 * 60 * 10) // 10 minutes
}

clearCache()

module.exports = {
    name: 'daily',
    category: 'Fun',
    timeout: 1,
    description: 'Run this command every **24 hours** to get some extra rings!',
    usage: `daily`,
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
        .setColor(colors.ERROR)
        .setDescription(":x: You have already claimed your **daily** reward!")

        const {
            guild,
            member
        } = message;
        const {
            id
        } = member;

        if (claimedCache.includes(id)) {
            console.log('returning from cache');
            message.reply(embed)
            return;
        }

        console.log('fetching from mongo')

        const obj = {
            guildId: guild.id,
            userId: id
        }

        await mongo().then(async mongoose => {
            try {
                const results = await dailyRewardsSchema.findOne(obj)

                console.log('Results:', results)

                if (results) {
                    const then = new Date(results.updatedAt).getTime()
                    const now = new Date().getTime()

                    const diffTime = Math.abs(now - then)
                    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)) // 24 hours

                    if (diffDays <= 1) {
                        claimedCache.push(id)

                        return message.reply(embed)
                    }
                }

                await dailyRewardsSchema.findOneAndUpdate(obj, obj, {
                    upsert: true,
                })

                claimedCache.push(id)

                const coinsToGive = Math.floor(Math.random() * 40) + 30;
                let balanceProfile = await balance.findOne({
                    userID: message.author.id,
                    guildID: message.guild.id
                });
                if (!balanceProfile) {
                    balanceProfile = await new balance({
                        _id: mongoose.Types.ObjectId(),
                        userID: message.author.id,
                        guildID: message.guild.id,
                        lastEdited: Date.now(),
                    })
                    await balanceProfile.save().catch(err => console.log(err));
                }

                let anotherEmbed = new MessageEmbed()
                .setColor(colors.SUCCESS)
                .setDescription(`Hey there pal! Today's check is worth ${config.currency}**${coinsToGive}**! Come back tomorrow to get more ${config.currency}!`)
                message.channel.send(anotherEmbed);
                await balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    balance: balanceProfile.balance + coinsToGive,
                    lastEdited: Date.now()
                });


            } finally {
                // do nothing
            }
        })





    }
}