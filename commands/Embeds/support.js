const Discord = require('discord.js')
const colors = require('../../colors.json')
const config = require('../../config.json')
const canvas = require('canvas')


module.exports = {
    name: 'support',
    aliases: [''],
    category: 'Embeds',
    timeout: 5000,
    description: 'Support Embed',
    usage: `supportembed`,
    run: async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        let embed1 = new Discord.MessageEmbed()
        .setColor(colors.red_light)
        .setDescription('**__Welcome to our Support Center!__**\n\nHere you can do the following:\n\n**File a Report:**\n\n- Report other members for violating our rules.\n- Report other members for violating Discord\'s Terms of Service (this includes reporting anyone who is under the age of 13).\n- Report a loophole in our chat filter.\n- Report a problem regarding <@1004762780508880986> or other <@&904578360485773382>\n- Report a member for harassing or bullying you or another member.\n\n**Get Support**\n\n- Appeal to clear a warning or mute.\n- Appeal on behalf of someone else to lift a ban.\n- Apply for <@&756952143776186460> or <@&896080274134286337>\n- Clear any other questions you may have.\n\n**Other**:\n\n- If you wish to report a member of <@&756723889278812221> for misconduct, please directly message a <@&934810508698214470> that is not the person you wish to make a complaint about.\n\n**Things to Remember:**\n\n- Please wait up to a couple of hours for a response, although we will strive to answer your ticket as soon as possible.\n- Please do not open tickets end-on-end or they may be closed automatically. Only open a ticket for serious business and do not open tickets extremely often.\n- Please do not message a member of staff asking about when your ticket will be answered. They will all be answered eventually! <3\n- Chat filters are still enabled in ticket channels, so keep things PG13.\n- If you are muted you are able to speak here, but please do not abuse this freedom.\n- One subject per ticket. No more please.\n- Please utilise the format provided below when you send your first message.')

        let embed2 = new Discord.MessageEmbed()
        .setColor(colors.orange)
        .setDescription('**Things to Include:**\n\nIf you are reporting someone else, please make sure that you have provided:\n\nTheir User ID (please see this video if you need help finding the ID, [click here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))\n- A **Message Link** that we can refer to (if applicable)\n- **Evidence** in the form of screenshots or other media (if applicable)\n\n**__Abusing this system, creating troll tickets or filing false reports will all result in an instant ban.__**\n\n⚠️ Please read all of the information above thoroughly before opening a ticket or your ticket may be revoked and closed! ⚠️\n\n📌 **REMINDER:** Do not open a ticket for no reason. Tickets that are left empty will be automatically deleted. Read through ⁠<#903762303026085939> first for any common questions you may have.\n\n⚠️ **- REMEMBER:** When applying for a YouTube/creator role, please review the requirements in <#903524420826591272> and question 5 in <#903762303026085939> before opening a ticket.')

        let embed3 = new Discord.MessageEmbed()
        .setColor(colors.green_light)
        .setDescription('Before opening a ticket, please review the information above. \n\n✅ - To open a ticket, click the "📩 Create ticket" button below!')

        message.channel.send({
            files: [
                './supportOASIS.jpg'
            ]
        })

        setTimeout(function(){
            message.channel.send(embed1)
            message.channel.send(embed2)
            message.channel.send(embed3)
        }, 5000)
    



           
    }
}