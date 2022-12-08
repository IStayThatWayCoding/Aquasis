
const mongo = require('../../utils/mongoose');
const rankSchema = require('../../schemas/rank_schem');
const path = require('path');
const { DiscordAPIError, MessageEmbed } = require('discord.js');
const colors = require('../../colors.json');
const config = require('../../config.json');

module.exports = {
    name: 'setlevel',
    aliases: ['sl'],
    category: 'Levels',
    timeout: 1,
    description: 'Sets a users level to a specific number',
    usage: `setlevel`,
    run: async (bot, message, args) => {

        if (!message.member.roles.cache.has(config.staffRole)) return;
        
        const target = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;

        const guild = bot.guilds.cache.get('755968485854675065');

        let usage = `>setlevel @user <num>`

        if (!args[0]) return message.channel.send(`Invalid Syntax. \`${usage}\``);
        if(!target) return message.channel.send(`Member doesn't exist`);
        if(!args[1]) return message.channel.send(`Invalid Syntax. \`${usage}\``);
        if(isNaN(args[1])) return message.channel.send(`Invalid Syntax. \`${usage}`);

        await mongo().then(async mongoose => {
            const results = await rankSchema.find({ id: target.id }).catch(err => console.error(`${path.basename(__filename)} There was a problem with database entry: `, err));

            if(results === 0){
                message.channel.send("User not found in database")
            }

            await rankSchema.findOneAndUpdate({
                id: target.id
            }, {
                level: args[1],
                xp: 50,
                xxp: 50,
            }, {
                upsert: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));

        message.channel.send("Data updated.")

        const logChannel = guild.channels.cache.get("903543603589173249")

        const embed123 = new MessageEmbed()
        .setTitle("User Level Updated")
        .setColor(colors.MUSIC)
        .setDescription(`Author: ${message.author}\nUser: ${target.tag}\nNew Level: ${args[1]}`)

        logChannel.send(embed123);

        let lvl5 = guild.roles.cache.get('757759380656750652')
        let lvl10 = guild.roles.cache.get('756953620288766074')
        let lvl15 = guild.roles.cache.get('756953619882049616')
        let lvl20 = guild.roles.cache.get('756953619626197032')
        let lvl25 = guild.roles.cache.get('756953618896388126')
        let lvl30 = guild.roles.cache.get('870113342222635049')
        let lvl35 = guild.roles.cache.get('870113470488670228')
        let lvl40 = guild.roles.cache.get('870113567377092618')
        let lvl45 = guild.roles.cache.get('903161806690877460')
        let lvl50 = guild.roles.cache.get('903162332593664030')
        let lvl55 = guild.roles.cache.get('903162402038759454')

        // if(args[1] == "5"){
        //     target.roles.add(lvl5)
        // }
        // if(args[1] == "10"){
        //     target.roles.add(lvl10)
        //     target.roles.remove(lvl5)
        // }
        // if(args[1] == "15"){
        //     target.roles.add(lvl15)
        //     target.roles.remove(lvl10)
        // }
        // if(args[1] == "20"){
        //     target.roles.add(lvl20)
        //     target.roles.remove(lvl15)
        // }
        // if(args[1] == "25"){
        //     target.roles.add(lvl25)
        //     target.roles.remove(lvl20)
        // }
        // if(args[1] == "30"){
        //     target.roles.add(lvl30)
        //     target.roles.remove(lvl25)
        // }
        // if(args[1] == "35"){
        //     target.roles.add(lvl35)
        //     target.roles.remove(lvl35)
        // }
        // if(args[1] == "40"){
        //     target.roles.add(lvl40)
        //     target.roles.remove(lvl35)
        // }
        // if(args[1] == "45"){
        //     target.roles.add(lvl45)
        //     target.roles.remove(lvl40)
        // }
        // if(args[1] == "50"){
        //     target.roles.add(lvl50)
        //     target.roles.remove(lvl45)
        // }
        // if(args[1] == "55"){
        //     target.roles.add(lvl55)
        //     target.roles.remove(lvl50)
        // }
           
    }
}