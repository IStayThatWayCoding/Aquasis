const selfRoleReactions = require('../objects/selfRoleReactions')

module.exports = async (bot, user, reaction) => {
    if (user.bot) return;

    if (reaction.partial) {
        try {
            await reaction.fetch
        } catch (error) {
            console.error(error)
            return;
        }
    }

    let message = reaction.message

    if ('903524741791506432' === message.channel.id){
        let emoji = reaction.emoji;
        const guild = bot.guilds.cache.get('755968485854675065')
        const member = guild.members.cache.get(member => member.id === user.id)
        if (member) {
            for (let reactionKey in selfRoleReactions) {
                if (selfRoleReactions.hasOwnProperty(reactionKey)) {
                    let selfRoleMessage = selfRoleReactions[reactionKey];
                    for (let reactionClass in selfRoleMessage) {
                        let selfRoleClass = selfRoleMessage[reactionClass];
                        // Check if we have the right message from self-roles
                        if (selfRoleClass.messageId === message.id) {
                            for (let roleIdKey in selfRoleClass.roleIds) {
                                let roleId = selfRoleClass.roleIds[roleIdKey];
                                if (roleIdKey === emoji.name) {
                                    if(message.id === '1109699803396456511'){
                                        if (member.roles.cache.has(roleId)){
                                            member.roles.remove(roleId);
                                            message.reactions.resolve(roleIdKey).users.remove(member.id)
                                             
                                        } else {
                                            if (selfRoleClass.exclusive) {
                                                if (member.roles.cache.has(roleId)) {
                                                    member.roles.remove(roleId);
                                                    message.reactions.resolve(roleIdKey).users.remove(member.id)
                                                } else {
                                                    if (member?.roles?.cache.has(roleId)) {
                                                        member?.roles.remove(roleId);
                                                        message.reactions.resolve(emoji.id).users.remove(member?.id)
                                                } else {
                                                    member?.roles.add(roleId);
                                                    message.reactions.resolve(emoji.id).users.remove(member?.id)
                                                }
                                            }
                                        } else if (selfRoleClass.exclusive) {
                                            message.reactions.resolve(roleIdKey).users.remove(member?.id);
                                            member?.roles.remove(roleId);
                                    } 
                                }
                                break;
            }
        }

    }

}

                    }
                }
            }}}}