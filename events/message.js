const { Collection, MessageEmbed } = require('discord.js');
const config = require('../config.json');
const autoReply = require('../modules/autoReply');
const autoWarn = require('../modules/autoWarn');
const chatBot = require('../modules/chatBot');
const rank_xp = require('../modules/rank_xp');
const balanceCheck = require('../modules/balanceCheck');
const Timeout = new Collection();
const ms = require('ms');
const colors = require('../colors.json');
const reactionRoles = require('../modules/reactionRoles')


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
    reactionRoles(message, bot);
    


    if (!message.content.startsWith(prefix)) return;


    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

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

    }



        
    }
        

