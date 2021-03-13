const Discord = require('discord.js')


module.exports = {

    name : 'unmute',
    
    description: 'unmutes a member',
    
    run : async (client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
        
        const reason = args[1] || "Please Enter a reason"

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted\nReason:- ${reason}`)
    }
}
