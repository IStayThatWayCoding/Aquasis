const { Collection, MessageEmbed } = require('discord.js');
const config = require('../config.json');
const autoReply = require('../modules/autoReply');
const autoWarn = require('../modules/autoWarn');
const chatBot = require('../modules/chatBot');
const rank_xp = require('../modules/rank_xp');
const balanceCheck = require('../modules/balanceCheck');
const Timeout = new Collection();
const ms = require('ms');
const colors = require('../colors.json')


module.exports = async (bot, message) => {

    let prefix = config.prefix;

    if (message.author.bot) return;

    function attachIsImage(msgAttach) {
        var url = msgAttach.url
        return url.indexOf("png", url.size - "png".length /*or 3*/) !== -1;
    }

    if(message.channel.type == 'dm'){
        const images = []
        
        var Attachment = (message.attachments).array()
        Attachment.forEach(function(attachment){
            console.log(attachment.url)
            images.push(`${attachment.url}\n\n`)   
        })

        if(message.attachments.size == 0){
            images.push("No Attachments Found")
        }
        console.log(images)

        const dmEmbed = new MessageEmbed()
        .setTitle('New DM')
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**USER ID**: ${message.author.id}\n**At**: ${new Date()}\n\n**Content** \`\`\`${message.content}\`\`\`\n\n**ATTACHMENTS:**\n ${images}`)

        const DMC = bot.channels.cache.get('1048464804030992384')
        DMC.send(dmEmbed)
    }

    if(!message.guild) return;

    rank_xp(message, bot); 
    autoReply(bot, message);
    autoWarn(bot, message);
    // chatBot(bot, message);
    balanceCheck(bot, message);
    


    if (!message.content.startsWith(prefix)) return;


    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));


    }

    if (command) {
        if(command.timeout) {

            if(Timeout.has(`${command.name}${message.author.id}`)){
                let embed = new MessageEmbed()
                .setDescription(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true})}\` cooldown.`)
                .setColor('#fcba03')
                return message.channel.send(embed)
            }
            command.run(bot, message, args);
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
            if(message.member.roles.cache.has(config.staffRole)) Timeout.delete(`${command.name}${message.author.id}`)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.timeout)
        }

// ---------------------------------------------------------------------------------------------------------------------------------------------- //
//                                                          REACTION ROLES
// ---------------------------------------------------------------------------------------------------------------------------------------------- //
if(message.content == `${prefix}reactions`){
    const he_him = message.guild.roles.cache.get('869924102482325504')
    const she_her = message.guild.roles.cache.get('869923953261547560')
    const they_them = message.guild.roles.cache.get('869924173420572682')
    const other_ask_me = message.guild.roles.cache.get('869924328270090252')
    const any_pronouns = message.guild.roles.cache.get('869924467143495732')
    const events = message.guild.roles.cache.get('903766322008195146')
    const shorts = message.guild.roles.cache.get('936105497994616832')

    const theChannel = message.guild.channels.cache.get('903543603589173249')

    const filter = (reaction, user) => user.id == message.author.id;

    const embed = new MessageEmbed()
        .setColor(colors.TRANSPARENT)
        .setDescription('🐟 ~ He/Him\n🐬 ~ She/Her\n🐳 ~ They/Them\n🌊 ~ Other/Ask Me\n💧 ~ Any Pronouns\n\n<a:oasisspin:1050143931775594576> ~ Events\n🚨 ~ YT Shorts Ping\n\n🤖 ~ Updates about Aquasis (bot)\n❌ ~ React to pause XP gaining')

        const reactionMessage = await theChannel.send(embed)

        await reactionMessage.react('🐟')
        await reactionMessage.react('🐬')
        await reactionMessage.react('🐳')
        await reactionMessage.react('🌊')
        await reactionMessage.react('💧')
        await reactionMessage.react('<a:oasisspin:1050143931775594576>')
        await reactionMessage.react('🚨')
        await reactionMessage.react('🤖')
        await reactionMessage.react('❌')

        // reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}.then(collected => {


            bot.on('messageReactionAdd', async (reaction, user) => {
                if(reaction.message.partial) reaction.message.fetch();
                if (reaction.partial) reaction.fetch();

                if (user.bot) return;
                if (!reaction.message.guild) return;

                if(reaction.message.channel.id === theChannel) {
                    if (reaction.emoji.name === '🐟'){
                        if (message.member.roles.cache.has(he_him)) {return message.channel.send("You already have this role!").then(m => m.delete({ timeout: 5000 }))}
                        reaction.message.guild.cache.get(user.id).roles.add(he_him).then(message.channel.send('Role added!').then(m => m.delete({ timeout: 5000 })))
                    }
                }
            })

            bot.on('messageReactionRemove', (reaction, user) => {
                if(reaction.message.partial) reaction.message.fetch();
                if (reaction.partial) reaction.fetch();

                if (user.bot) return;
                if (!reaction.message.guild) return;

                if(reaction.message.channel.id === theChannel) {
                    if (reaction.emoji.name === '🐟'){
                        if (!message.member.roles.cache.has(he_him)) {return message.channel.send("You already don't have this role!").then(m => m.delete({ timeout: 5000 }))}
                        reaction.message.guild.cache.get(user.id).roles.remove(he_him).then(message.channel.send('Role removed!').then(m => m.delete({ timeout: 5000 })))
                    }
                }
            })

            // switch (reaction.emoji.name) {
            //     case "🐟":
            //         if (message.member.roles.cache.has(he_him)) {return message.channel.send("You already have this role!").then(m => m.delete({ timeout: 5000 }))}

            //         message.member.roles.add(he_him).then(message.channel.send('Role added!').then(m => m.delete({ timeout: 5000 })))
                    
            //         break;
            // }
        }

// ---------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------- //

        
    }
        

