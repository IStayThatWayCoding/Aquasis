const DisTube = require('distube');
const { MessageEmbed } = require('discord.js');
const colors = require('../colors.json');

module.exports = async (bot, message) => {
    const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${
        queue.filters.join(', ') || 'Off'
    }\` | Loop: \`${
        queue.repeatMode
            ? queue.repeatMode === 2
                ? 'All Queue'
                : 'This Song'
            : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

//     setTimeout(async () => {

//         const queue = bot.distube.getQueue(message)
    
//         if (!queue.textChannel.guild.me.voice.channelId) {
//           return clearTimeout();
//         }
//         let queue_music = await bot.distube.getQueue(queue.voiceChannel);
    
//         if (queue_music !== undefined && queue_music.playing) {
//           clearTimeout();
//         } else if (queue_music == undefined || queue_music.songs.length === 0) {
//           queue.textChannel
//             .send({
//               embeds: [
//                 new MessageEmbed()
//                   .setDescription("Finished!")
//               ],
//             })
//             .catch(() => { })
//           queue.stop(bot.voice.channel)
//         }
//       }, 120000)

bot.distube
    .on('playSong', (queue, song) =>
        queue.textChannel?.send(
            new MessageEmbed()
            .setColor(colors.MUSIC)
            .setDescription(`Playing \`${song.name}\` - \`${
                song.formattedDuration
            }\`\nRequested by: ${song.user}\n${status(queue)}`)
            
            // `Playing \`${song.name}\` - \`${
            //     song.formattedDuration
            // }\`\nRequested by: ${song.user}\n${status(queue)}`,
        ),
    )



    .on('addSong', (queue, song, message) =>
        
        queue.textChannel?.send(
            new MessageEmbed()
            .setColor(colors.MUSIC)
            .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`),
        
            // `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
 
        ),
    )

    .on('addList', (queue, playlist) =>
        queue.textChannel?.send(
            `Added \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) to queue\n${status(queue)}`,
        ),
    )
.on('error', (textChannel, e) => {
    console.error(e)
    textChannel.send(
        `An error encountered: ${e.message.slice(0, 2000)}`,
    )
})

.on('finish', queue => queue.textChannel?.send(
            queue.textChannel?.send(
            new MessageEmbed()
            .setColor(colors.MUSIC)
            .setDescription("Queue Finished")
            ),
    ))
    .on('finishSong', queue =>
        queue.textChannel?.send(
        new MessageEmbed()
        .setColor(colors.MUSIC)
        .setDescription("Song Finished/Skipped")
        ),
    )
    .on('disconnect', queue =>
        queue.textChannel?.send(
            new MessageEmbed()
            .setColor(colors.MUSIC)
            .setDescription("Disconnected from VC")
            ),
    )
    .on('empty', queue =>
        queue.textChannel?.send(
            queue.textChannel?.send(
                new MessageEmbed()
                .setColor(colors.MUSIC)
                .setDescription('The voice channel is empty! Leaving the voice channel...'),
                ),
            
        ),
    )
.on('searchResult', (message, result) => {
    let i = 0
    message.channel.send(
        new MessageEmbed()
        .setTitle("Search Results")
        .setColor(colors.MUSIC)
        .setDescription(`**Choose an option form below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}`)
        .setFooter(`Enter anything else or wait 30 seconds to cancel.`)
        // `**Choose an option from below**\n${result
    //         .map(
    //             song =>
    //                 `**${++i}**. ${song.name} - \`${
    //                     song.formattedDuration
    //                 }\``,
    //         )
    //         .join(
    //             '\n',
    //         )}\n*Enter anything else or wait 30 seconds to cancel*`,
     )
})


.on('searchCancel', message =>
    message.channel.send(
        new MessageEmbed()
        .setColor(colors.MUSIC)
        .setDescription('Searching cancelled'),
    ),
)
.on('searchInvalidAnswer', message =>
message.channel.send(
    new MessageEmbed()
    .setColor(colors.MUSIC)
    .setDescription('Invalid answer.'),
),
)
.on('searchNoResult', message =>
message.channel.send(
    new MessageEmbed()
    .setColor(colors.MUSIC)
    .setDescription('No result found'),
),
)
.on('searchDone', () => {})




}
