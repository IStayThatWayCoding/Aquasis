const balance = require('../../schemas/balance');
const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')

module.exports = {
    name: 'balance',
    aliases: ['bal', 'money'],
    category: 'Information',
    timeout: 5000,
    description: 'Checks a user balance',
    usage: `balance [@user]`,
    run: async (bot, message, args) => {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember) mentionedMember = message.member;

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
        .setDescription(`<@${mentionedMember.id}> has ${config.currency}**${balanceProfile.balance}**!`)
        message.channel.send(embed)
           
    }
}