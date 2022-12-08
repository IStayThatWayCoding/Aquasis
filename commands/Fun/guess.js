const chalk = require('chalk')
const mongoose = require('mongoose');
const balance = require('../../schemas/balance');
const { MessageEmbed } = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');

module.exports = {
    name: 'guess',
    category: 'Fun',
    timeout: 5000,
    description: 'Guess a number for some rings!',
    usage: `guess <num>`,
    run: async (bot, message, args) => {
        const numToGuess = Math.floor(Math.random() * 10);
        const randomCoins = Math.floor(Math.random() * 500) + 350

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

        let noRings = new MessageEmbed()
        .setTitle("Whoops!")
        .setColor(colors.ERROR)
        .setDescription(`Sorry pal! You do not have ${config.currency}***enough rings*** to guess! Get more and come back soon!`)
        .setTimestamp()

        if(balanceProfile.balance < 0) return message.channel.send(noRings)

        let embed = new MessageEmbed()

        if(isNaN(args[1]) && isNaN(parseFloat(args[0]))) {
            embed = embed.setTitle("Enter a valid number!")
            .setDescription("Guess a number, come on!")
            .setColor(colors.red_dark)
            return message.channel.send(embed);
        }

        if(parseInt(args[0]) < 0) {
            embed = embed.setTitle("Enter a valid number!")
            .setDescription("The number is between 1-20!")
            .setColor(colors.red_dark)
            return message.channel.send(embed);
        }
        if(parseInt(args[0]) > 10 || parseInt(args[0]) < 0) {
            embed = embed.setTitle("Number is too big!")
            .setDescription("Number is between 0-10!")
            .setColor(colors.red_dark);
            return message.channel.send(embed)
        }

        if(parseInt(args[0]) == numToGuess) {
            embed = embed.setTitle("Congratulations!")
            .setColor(colors.SUCCESS)
            .setDescription(`Congrats on guessing my number! It was ${numToGuess}! You just earned yourself ${config.currency}${randomCoins}!`)
            message.channel.send(embed)
            await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: balanceProfile.balance + randomCoins, lastEdited: Date.now() });
        } else {
            embed = embed.setTitle("Unlucky, my friend!")
            .setColor(colors.red_dark)
            .setDescription(`You guessed it wrong! it was ${numToGuess}! Sadly, I have to take a fee of ${config.currency}20 away from ya! Better luck next time!`)
            message.channel.send(embed)
            await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: balanceProfile.balance - 20, lastEdited: Date.now() });
        }
           
    }
}