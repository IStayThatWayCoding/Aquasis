const mongoose = require('mongoose');
const balance = require('../../schemas/balance');
const { MessageEmbed } = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');

module.exports = {
    name: 'gamble',
    category: 'Fun',
    timeout: 43200000,
    // timeout: 5000,
    description: 'Lose it or gain it!',
    usage: `gamble <amount>`,
    run: async (bot, message, args) => {
        const chance = Math.floor(Math.random() * 10) + 1; //1-10
        if(chance >= 1 && chance <= 5) {
            const coinsToGive = Number(args[0])
            if(!coinsToGive) return;
            let balanceProfile = await balance.findOne({ userID: message.author.id, guildID: message.guild.id })
            if(!balanceProfile) {
                balanceProfile = await new balance({
                    _id: mongoose.Types.ObjectId(),
                    userID: message.author.id,
                    guildID: message.guild.id,
                    lastEdited: Date.now(),
                })
                await balanceProfile.save().catch(err => console.error(err));
            }
            let noRings = new MessageEmbed()
            .setTitle("Whoops!")
            .setColor(colors.ERROR)
            .setDescription(`Sorry pal! You do not have ${config.currency}***${coinsToGive}*** to gamble!`)
            .setTimestamp()

            if(balanceProfile.balance < coinsToGive) return message.channel.send(noRings)

            let finalResult = new MessageEmbed()
            .setTitle("Yipee!")
            .setColor(colors.SUCCESS)
            .setDescription(`Congrats! You just won ${config.currency}**${coinsToGive}**! You're lucky! *Come back in 12 hours to try again*\n\nNew Balance: ${config.currency}${balanceProfile.balance + coinsToGive}`)
            .setTimestamp()
            message.channel.send(finalResult);
            await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: balanceProfile.balance + coinsToGive, lastEdited: Date.now() });
        } else {

            const coinsToGive = Number(args[0])
            if(!coinsToGive) return;
            let balanceProfile = await balance.findOne({ userID: message.author.id, guildID: message.guild.id })
            if(!balanceProfile) {
                balanceProfile = await new balance({
                    _id: mongoose.Types.ObjectId(),
                    userID: message.author.id,
                    guildID: message.guild.id,
                    lastEdited: Date.now(),
                })
                await balanceProfile.save().catch(err => console.error(err));
            }
            let noRings = new MessageEmbed()
            .setTitle("Whoops!")
            .setColor(colors.ERROR)
            .setDescription(`Sorry pal! You do not have ${config.currency}***${coinsToGive}*** to gamble!`)
            .setTimestamp()

            if(balanceProfile.balance < coinsToGive) return message.channel.send(noRings)

            let finalResult = new MessageEmbed()
            .setTitle("Wah Wah Wahhhhh")
            .setColor(colors.ERROR)
            .setDescription(`Oh No!! You just lost ${config.currency}**${coinsToGive}**... sorry.. *Come back in 12 hours to try again*\n\nNew Balance: ${config.currency}${balanceProfile.balance - coinsToGive}`)
            .setTimestamp()
            message.channel.send(finalResult);
            await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: balanceProfile.balance - coinsToGive, lastEdited: Date.now()});
        }
           
    }
}