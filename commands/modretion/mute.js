const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    description: 'tempmute command',
    
    run : async(client, message, args) => {
        
        const embed = new Discord.MessageEmbed()
        
        if(!message.member.hasPermission('MANAGE_ROLES')) {
            
            embed.setDescription('You Dont have perm to use this command');
            embed.setColor('e91313');
            
            message.author.send(embed);
}
        
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        const time = args[1]
        
        let reason = args.slice(2).join(" ")
        
    
        if(!Member) return message.channel.send('Member is not found.')
        if(!time) return message.channel.send('Please specify a time Must be in s, m or d')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        
        embed.setDescription(`${Member.displayName} has been muted for ${time}\nReason:- ${reason}`)
        embed.setColor('41a521');
        message.channel.send(embed)
        message.mentions.user.first.send(`You have been muted in ${message.guild}\nDuration:- ${time}\nReason:- ${reason}`)

        setTimeout(async () => {
            await Member.roles.remove(muted)
            message.channel.send(`${Member.displayName} is now unmuted`)
        }, ms(time))
    }
}
