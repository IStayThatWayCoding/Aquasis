const Discord = require('discord.js');
const mongo = require('../utils/mongoose');
const rankSchema = require('../schemas/rank_schem');
const path = require('path');
const mongoose = require('../utils/mongoose');
const xpLimit = new Set();
const config = require('../config.json');

module.exports = async (message, bot) => {
    const guild = bot.guilds.cache.get('755968485854675065');

    const disableXP = ['903867173150294036', '903523881090945116', '903853974661247036', '903578658986418197', '903523553222230106', '903523421042929674', '903864384357543978', '1007900121700257822'];

    if (!message.author.bot && !xpLimit.has(message.author.id)) {
        await mongoose().then(async mongoose => {

            const sort = await rankSchema.find().catch(err => console.error(`${path.basename(__filename)} There was a problem finding a database entry: `, err));

            sortArr = [];
            for (const data of sort) {
                const {
                    id,
                    xp
                } = data;

                sortArr.push({
                    id,
                    xp
                });
            }

            sortArr.sort(function (a, b) {
                return b.xp - a.xp;
            });

            const results = await rankSchema.find({
                id: message.author.id
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem finding a database entry: `, err))

            if (results.length === 0) {
                await rankSchema.findOneAndUpdate({
                    rank: 0,
                    id: message.author.id,
                    username: message.author.username,
                    discrim: message.author.discriminator,
                    avatar: message.author.avatar,
                    level: 0,
                    msgCount: 0,
                    xp: 0,
                    xxp: 0,
                    xxxp: 100
                }, {
                    rank: 0,
                    id: message.author.id,
                    username: message.author.username,
                    discrim: message.author.discriminator,
                    avatar: message.author.avatar,
                    level: 0,
                    msgCount: 0,
                    xp: 0,
                    xxp: 0,
                    xxxp: 100

                }, {
                    upsert: true
                }).catch(err => console.error(`${path.basename(__filename)} There was an issue updating a database entry: `, err));
            }

            if (disableXP.includes(message.channel.id)) return;

            if (message.member.roles.cache.has(config.noxp)) return;

            function randomNum(min, max) {
                return Math.floor(Math.random() * (max - min - 1) + min);
            }

            for (const data of results) {
                let { xp, xxp, xxxp, level, msgCount} = data;

                
                let msgMath = parseInt(msgCount) + 1;
                // let random = randomNum(15, 25); // Normal XP gain
                let random = randomNum(75, 125) //5x XP boost
                let xpMath =  parseInt(xp) + random;
                let xxpMath = parseInt(xxp) + random;

                let xxpInt = parseInt(xxp);
                let xxxpInt = parseInt(xxxp);
                let newUsername = message.author.username;
                let newDiscrim = message.author.discriminator;

                

                rankPosArr = [];
                for (let i = 0; i < sortArr.length; i++) {
                    await rankPosArr.push({
                        pos: i + 1,
                        id: sortArr[i].id,
                        xp: sortArr[i].xp
                    });
                }

                const findInArr = await rankPosArr.find(m => m.id === message.author.id);
                rankPos = findInArr.pos;

                await rankSchema.findOneAndUpdate({
                    id: message.author.id
                }, {
                    rank: rankPos,
                    username: newUsername,
                    discrim: newDiscrim,
                    avatar: message.author.avatar,
                    xp: xpMath,
                    xxp: xxpMath
                }, {
                    upsert: true
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));

                if (xxpMath > xxxpInt) {
                    let levelMath = parseInt(level) + 1;
                    let exponential = 5 * Math.pow(levelMath, 2) + (50 * levelMath) + 100 - 0;

                    let levelUpChannel = message.guild.channels.cache.get('903857055855677470')

                    let theEmbed = new Discord.MessageEmbed()
                    .setTitle("Level Up")
                    .setColor("RANDOM")
                    .setDescription(`${message.author} has leveled up to level **${levelMath}**! POGCHAMP`)

                    levelUpChannel.send(theEmbed);
                    levelUpChannel.send(`<@${message.author.id}>`).then(m => m.delete({ timeout: 500 }))

                    await rankSchema.findOneAndUpdate({
                        id: message.author.id
                    }, {
                        level: levelMath,
                        xp: xpMath,
                        xxp: 0,
                        xxxp: exponential
                    }, {
                        upsert: true
                    }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));


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
                    let lvl60 = guild.roles.cache.get('1048795955824185414')
                    let lvl65 = guild.roles.cache.get('1048796299316695080')
                    let lvl70 = guild.roles.cache.get('1048797646594248755')
                    let lvl75 = guild.roles.cache.get('1048797870251327558')


                    if (levelMath === 5) {
                        message.member.roles.add(lvl5)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 5")
                            .addField("Role Unlocked:", `❥ burst wisp (rank 5)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 10) {
                        message.member.roles.add(lvl10)
                        message.member.roles.remove(lvl5)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 10")
                            .addField("Role Unlocked:", `❥ rocket wisp (rank 10)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 15) {
                        message.member.roles.add(lvl15)
                        message.member.roles.remove(lvl10)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 15")
                            .addField("Role Unlocked:", `❥ drill wisp (rank 15)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 20) {
                        message.member.roles.add(lvl20)
                        message.member.roles.remove(lvl15)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 20")
                            .addField("Role Unlocked:", `❥ hover wisp (rank 20)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 25) {
                        message.member.roles.add(lvl25)
                        message.member.roles.remove(lvl20)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 25")
                            .addField("Role Unlocked:", `❥ jade wisp (rank 25)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 30) {
                        message.member.roles.add(lvl30)
                        message.member.roles.remove(lvl25)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 30")
                            .addField("Role Unlocked:", `❥ laser wisp (rank 30)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 35) {
                        message.member.roles.add(lvl35)
                        message.member.roles.remove(lvl30)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 35")
                            .addField("Role Unlocked:", `❥ cube wisp (rank 35)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 40) {
                        message.member.roles.add(lvl40)
                        message.member.roles.remove(lvl35)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 40")
                            .addField("Role Unlocked:", `❥ spike wisp (rank 40)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 45) {
                        message.member.roles.add(lvl45)
                        message.member.roles.remove(lvl40)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 45")
                            .addField("Role Unlocked:", `❥ frenzy wisp (rank 45)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 50) {
                        message.member.roles.add(lvl50)
                        message.member.roles.remove(lvl45)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 50")
                            .addField("Role Unlocked:", `❥ void wisp (rank 50)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 55) {
                        message.member.roles.add(lvl55)
                        message.member.roles.remove(lvl50)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 55")
                            .addField("Role Unlocked:", `❥ wherehog! (rank 55)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 60) {
                        message.member.roles.add(lvl60)
                        message.member.roles.remove(lvl55)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 60")
                            .addField("Role Unlocked:", `❥ darkspine! (rank 60)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 65) {
                        message.member.roles.add(lvl65)
                        message.member.roles.remove(lvl60)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 65")
                            .addField("Role Unlocked:", `❥ excalibur! (rank 65)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 70) {
                        message.member.roles.add(lvl70)
                        message.member.roles.remove(lvl65)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 70")
                            .addField("Role Unlocked:", `❥ SUPER! (rank 70)`)

                        message.author.send(embed);
                    }
                    if (levelMath === 75) {
                        message.member.roles.add(lvl75)
                        message.member.roles.remove(lvl70)
                            .catch(err => console.error(`${path.basename(__filename)} There was a problem adding a role: `, err));


                        let embed = new Discord.MessageEmbed()
                            .setAuthor(`${bot.user.username}`, bot.user.avatarURL())
                            .setColor("RANDOM")
                            .setTitle("Level Reward!")
                            .setDescription("Hey there! You just unlocked a new level role! Information is below.")
                            .addField("Level Milestone:", "Level 75")
                            .addField("Role Unlocked:", `❥ HYPER! (rank 75)`)

                        message.author.send(embed);
                    }
                }
            }
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));

        // Limit
        xpLimit.add(message.author.id)

        setTimeout(() => {
            xpLimit.delete(message.author.id)
        }, 60000)
    }

    // Count messages towards the count (msgCount)

    await mongo().then(async mongoose => {
        const results = await rankSchema.find({
            id: message.author.id
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem finding a database entry: `, err));

        for (const data of results) {
            let {
                msgCount
            } = data;

            let msgMath = parseInt(msgCount) + 1;


            await rankSchema.findOneAndUpdate({
                id: message.author.id
            }, {
                msgCount: msgMath
            }, {
                upsert: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem updating a database entry: `, err));
        }
    }).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));
}