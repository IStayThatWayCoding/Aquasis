const config = require('../../config.json');

module.exports = {
    name: 'noxp',
    aliases: ['nxp'],
    timeout: 5000,
    category: 'Roles',
    description: 'Toggles no xp',
    usage: `noxp`,
    run: async (bot, message, args) => {
        if (!message.member.roles.cache.has(config.noxp)){
            message.member.roles.add(config.noxp)
            message.channel.send(`<:OasisYes:929634256706215957> - You will no longer receive XP! To receive XP again, run the \`>noxp\` command.`);
        } else {
            message.member.roles.remove(config.noxp)
            message.channel.send(`<:OasisNo:929634830528954378> - You are now receiving XP! If you do not want to receive XP, run the \`>noxp\` command again.`)
        }
           
    }
}
