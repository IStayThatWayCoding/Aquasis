const balance = require('../../schemas/balance');
const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json');

module.exports = {
    name: 'givecoins',
    aliases: ['gc'],
    category: 'Admin',
    timeout: 5000,
    description: 'Gives coins to a user',
    usage: `givecoins <@user>/<userid>`,
    run: async (bot, message, args) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!mentionedMember) return;

        const coinsToGive = Number(args[1])
        if(!coinsToGive) {
            return message.channel.send("Please specify a valid number of coins to give.")
        }
        if(isNaN(coinsToGive)) {
            return message.channel.send("Invalid Number.")
        }

        let balanceProfile = await balance.findOne({ userID: mentionedMember.id, guildID: message.guild.id });
        if(!balanceProfile) {
            balanceProfile = await new balance({
                _id: mongoose.Types.ObjectId(),
                userID: mentionedMember.id,
                guildID: mentionedMember.id,
                lastEdited: Date.now(),
            })
            await balanceProfile.save().catch(err => console.log(err));
        }

        let embed = new MessageEmbed()
        .setColor(colors.SUCCESS)
        .setDescription(`${mentionedMember} has been given ${config.currency}${coinsToGive}!\n\nNew Balance: ${config.currency}${balanceProfile.balance + coinsToGive}`)
        .setTimestamp();

        message.channel.send(embed)
        await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: balanceProfile.balance + coinsToGive, lastEdited: Date.now() });

        
           
    }
}