const Discord = require('discord.js');


module.exports = {
    name: 'kick',
    description: 'kicks a member',

    run: async (client, message, args) => {
        let toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args.slice(1).join(" ") || "There was no reason given"

        toKick.kick({
            reason: reason
        })
        message.channel.send(`${toKick} has been Kicked from the server!\nReason:- ${reason}`);
        message.mentions.members.first().send(`You Were Kicked From ${message.guild}\nReason:- ${reason}`);
    }
}