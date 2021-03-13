const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'Bans any specified user.',
    run: async (client, message, args) => {

let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 
if (!toBan) return message.channel.send(`Please mention a user to b banned `*ban [user/userid/username] [reason]``)
        const reason = args.slice(1).join(" ")

        toBan.ban({
            reason: reason || "There was No reason given"
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`);
        message.mentions.members.first().send(`You Were Banned From ${message.guild}`);
    }

}    



