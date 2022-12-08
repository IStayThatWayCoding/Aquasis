const Discord = require('discord.js');
const colors = require('../colors.json');
const User = require('../schemas/user');
const mongoose = require('mongoose')
const config = require('../config.json');




module.exports = async (bot, message) => {

    let allowed = [
        "473568312840814610",
        "274021702411747328"
    ]


    if(!message.member.roles.cache.has(config.staffRole)){

    const guild = bot.guilds.cache.get('755968485854675065');
    const logChannel = guild.channels.cache.get("903543603589173249");

    const listeners = [
        "@oasis",
        "@Oasis",
        `<@473568312840814610>`
    ]

    listeners.forEach((word) => {
        if(message.content.includes(word)){
            message.channel.send(`${message.author}, please don't ping Oasis! Make sure you read <#756718628207984760> :)`)

        User.findOne({
            guildID: message.guild.id,
            userID: message.author.id
        }, async (err, user) => {
            if(err) console.log(err);

            if(!user){
                const newUser = new User({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    userID: message.author.id,
                    pingedOasis: 1,
                });

                await newUser.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));
            } else {
                user.updateOne({
                    pingedOasis: user.pingedOasis +1
                })
                .then(result => console.log(result))
                .catch(err => console.error(err));

                let embed = new Discord.MessageEmbed()
                .setTitle("User Pinged Oasis")
                .setColor(colors.MUSIC)
                .setDescription(`${message.author} tried to ping Oasis! They have now tried to ping Oasis **${user.pingedOasis}** time(s)!`)

                logChannel.send(embed)
            };
        }).catch(err => console.log(err))
        }
    })
}

}