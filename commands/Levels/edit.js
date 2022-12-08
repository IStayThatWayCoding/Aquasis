const mongo = require('../../utils/mongoose');
const rankSchema = require('../../schemas/rank_schem');
const config = require('../../config.json');

module.exports = {
    name: 'edit',
    aliases: ['change', 'modify'],
    category: 'Levels',
    timeout: 1,
    description: 'Edits a user level/xp',
    usage: `edit`,
    run: async (bot, message, args) => {

        // const allowedRoles = [
        //     '756723869699670016',
        //     '825974296663818250',
        //     '934810508698214470',
        //     '756950808427364392'
        // ]

        // if(!message.member.roles.hasAny(allowedRoles)) return;

        if (!message.member.roles.cache.has(config.staffRole)) return;

        const target = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;

        let usage = `${config.PREFIX}edit @user xp reset (only option available)`

        if (!args[0]) return message.channel.send(`Invalid Syntax. \`${usage}\``);
        if (!target) return message.channel.send(`Member doesn't exist.`)
        if (!['xp'].includes(args[1])) return message.channel.send(`Invalid XP/Level \`${usage}\``);
        if (args[1] == 'xp') {
            if (!['reset'].includes(args[2])) return message.channel.send('Are you resetting? If so, please say "reset" when you try the command again.')

            if (args[2] == 'reset') {
                await mongo().then(async mongoose => {
                    const results = await rankSchema.find({ id: target.id }).catch(err => console.error(`${path.basename(__filename)} There was a problem finding a database entry: `, err));

                    if(results === 0){
                        message.chanel.send('That user cannot be found in the rank database.')
                    }

                    await rankSchema.findOneAndUpdate({
                        id: target.id
                    }, {
                        level: 0,
                        rank: 0,
                        msgCount: 0,
                        xp: 0,
                        xxp: 0,
                        xxxp: 0,
                    }, {
                        upsert: true
                    }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));

                message.channel.send(`${target.tag}'s rank data has been reset!`)

            }
    }

    }

}