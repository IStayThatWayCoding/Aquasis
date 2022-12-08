const balance = require('../schemas/balance')
const mongoose = require('mongoose');
const path = require('path');


module.exports = async (bot, message) => {
    const randomAmountOfCoins = Math.floor(Math.random() * 10) + 5; // 5-15 coins
    const messageGive = Math.floor(Math.random() * 10) + 1 // 1-10
    if (messageGive >= 2 && messageGive <= 5) {
        let balanceProfile = await balance.findOne({ userID: message.author.id, guildID: message.guild.id });
        if(!balanceProfile) {
            balanceProfile = await new balance({
                _id: mongoose.Types.ObjectId(),
                userID: message.author.id,
                guildID: message.guild.id,
                lastEdited: Date.now(),
            })
            await balanceProfile.save().catch(err => console.error(`${path.basename(__filename)}`, err));
        }
        await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id}, { balance: balanceProfile.balance + randomAmountOfCoins, lastEdited: Date.now() });
    }
}