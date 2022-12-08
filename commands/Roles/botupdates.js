const config = require('../../config.json');

module.exports = {
    name: 'botupdates',
    aliases: ['bu'],
    timeout: 5000,
    category: 'Roles',
    description: 'Toggles bot announcements',
    usage: `botupdates`,
    run: async (bot, message, args) => {
        if (!message.member.roles.cache.has(config.botupdates)){
            message.member.roles.add(config.botupdates)
            message.channel.send(`:white_check_mark: - You are now receiving notifications about Aquasis! If you do not want to receive notifications about Aquasis, run the \`>botupdates\` command again.`);
        } else {
            message.member.roles.remove(config.botupdates)
            message.channel.send(`:x: - You are no longer receiving notifications about Aquasis! If you want to receive notifications again, run the \`>botupdates\` command again.`)
        }
           
    }
}
