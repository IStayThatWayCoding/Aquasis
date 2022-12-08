
const mongo = require('../../utils/mongoose');
const rankSchema = require('../../schemas/rank_schem');
const path = require('path')
const config = require('../../config.json')

module.exports = {
    name: 'setxp',
    aliases: ['sx'],
    category: 'Levels',
    timeout: 1,
    description: 'Sets a users xp to a specific number',
    usage: `setxp`,
    run: async (bot, message, args) => {

        if (!message.member.roles.cache.has(config.staffRole)) return;
        
        const target = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;

        let usage = `>setxp @user <num>`

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
                xp: args[1],
                xxp: args[1],
            }, {
                upsert: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));

        message.channel.send("Data updated.")
           
    }
}