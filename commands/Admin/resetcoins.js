const balance = require('../../schemas/balance');
const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json');

module.exports = {
    name: 'resetcoins',
    aliases: ['rec'],
    category: 'Admin',
    timeout: 5000,
    description: 'Resets coins from a user',
    usage: `resetcoins <@user>/<userid>`,
    run: async (bot, message, args) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!mentionedMember) return;

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
        .setDescription(`${mentionedMember}'s Rings have been reset!\n\nNew Balance: ${config.currency}0`)
        .setTimestamp();

        message.channel.send(embed)
        await balance.findOneAndUpdate({ userID: message.author.id, guildID: message.guild.id }, {balance: 0, lastEdited: Date.now() });

        
           
    }
}