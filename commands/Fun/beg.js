const mongo = require('../../utils/mongoose');
const begSchema = require('../../schemas/beg-schema');
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
    name: 'beg',
    category: 'Fun',
    timeout: 1,
    description: 'Beg for some rings! This command can be run every 2 hours!',
    usage: `beg`,
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(colors.ERROR)
            .setDescription(":x: You cannot beg yet!")

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
                const results = await begSchema.findOne(obj)

                console.log('Results:', results)

                if (results) {
                    const then = new Date(results.updatedAt).getTime()
                    const now = new Date().getTime()

                    const diffTime = Math.abs(now - then)
                    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 1)) // 2 hours... apparently

                    if (diffDays <= 1) {
                        claimedCache.push(id)

                        return message.reply(embed)
                    }
                }

                await begSchema.findOneAndUpdate(obj, obj, {
                    upsert: true,
                })

                claimedCache.push(id)

                const chance = Math.floor(Math.random() * 10) + 1; //1-10
                if (chance >= 1 && chance <= 3) {
                    const array = [
                        "Ugh. Take my money, but I may get you next time... *Come back in 2 hours to try again*",
                        "This is all I have to pay my rent! *Come back in 2 hours to try again*",
                        "Come on! *Come back in 2 hours to try again*"
                    ];
                    const coinsToGive = Math.floor(Math.random() * 25) + 15; //15-25
                    let balanceProfile = await balance.findOne({
                        userID: message.author.id,
                        guildID: message.guild.id
                    })
                    if (!balanceProfile) {
                        balanceProfile = await new balance({
                            _id: mongoose.Types.ObjectId(),
                            userID: message.author.id,
                            guildID: message.guild.id,
                            lastEdited: Date.now(),
                        })
                        await balanceProfile.save().catch(err => console.error(err));
                    }
                    message.channel.send(`${array[Math.floor(Math.random() * 2)]}\n\nYou were given ${config.currency}**${coinsToGive}**!`);
                    await balance.findOneAndUpdate({
                        userID: message.author.id,
                        guildID: message.guild.id
                    }, {
                        balance: balanceProfile.balance + coinsToGive,
                        lastEdited: Date.now()
                    });
                } else {
                    const array = [
                        "Sorry, not today. *Come back in 2 hours to try again*",
                        "Nah, I'm good, try again next time *Come back in 2 hours to try again*",
                        "No Thanks. *Come back in 2 hours to try again*"
                    ]
                    message.channel.send(array[Math.floor(Math.random() * 2)]);
                }


            } finally {
                // do nothing
            }
        })





    }
}