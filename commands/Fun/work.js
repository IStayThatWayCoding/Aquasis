const mongo = require('../../utils/mongoose');
const workSchema = require('../../schemas/work-schema');
const balance = require('../../schemas/balance');
const {
    MessageEmbed
} = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');

let claimedCache = []

const clearCache = () => {
    claimedCache = []
    setTimeout(clearCache, 1000 * 60 * 10) // 10 minutes
}

clearCache()

module.exports = {
    name: 'work',
    category: 'Fun',
    timeout: 1,
    description: 'Work for some shiny rings!',
    usage: `work`,
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(colors.ERROR)
            .setDescription(":x: You have worked recently! Try again **a day** after you worked!")

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
                const results = await workSchema.findOne(obj)

                console.log('Results:', results)

                if (results) {
                    const then = new Date(results.updatedAt).getTime()
                    const now = new Date().getTime()

                    const diffTime = Math.abs(now - then)
                    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 1)) // 1 hour

                    if (diffDays <= 1) {
                        claimedCache.push(id)

                        return message.reply(embed)
                    }
                }

                await workSchema.findOneAndUpdate(obj, obj, {
                    upsert: true,
                })

                claimedCache.push(id)


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

                let replies = ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic', 'Chef', 'Nurse']

                let result = Math.floor(Math.random() * replies.length);
                let amount = Math.floor(Math.random() * 80) + 1;
                let embed1 = new MessageEmbed()
                    .setColor(colors.SUCCESS)
                    .setDescription(`:white_check_mark: You worked as a **${replies[result]}** and earned ${config.currency}**${amount}**`)
                message.channel.send(embed1)
                await balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    balance: balanceProfile.balance + amount,
                    lastEdited: Date.now()
                });


            } finally {
                // do nothing
            }
        })





    }
}

// let replies = ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic', 'Chef', 'Nurse']

// let result = Math.floor(Math.random() * replies.length);
// let amount = Math.floor(Math.random() * 80) + 1;
// let embed1 = new MessageEmbed()
// .setColor(colors.SUCCESS)
// .setDescription(`:white_check_mark: You worked as a ${replies[result]} and earned ${config.currency}${amount}`)
// message.channel.send(embed1)
// await balance.findOneAndUpdate({
//     userID: message.author.id,
//     guildID: message.guild.id
// }, {
//     balance: balanceProfile.balance + amount,
//     lastEdited: Date.now()
// });