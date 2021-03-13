const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'embed command',
   run: async (client, message, args) => {
       if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');

       let Colr = args[0]

       if (!Colr) return message.channel.send(`Provide a Color Name`)

       let Ttl = args[1]

       if (!Ttl) return message.channel.send(`Provide a Title`)

       let Thu = args[2] 
       
       if (!Thu) return message.channel.send(`Provide a Thumbnaim URL`)

       let content = args.slice(3).join(" "); 

       if (!content) return message.channel.send(`Provide a Desription`)
    
       const embed = new Discord.MessageEmbed()
       embed.setTitle(Ttl);

       embed.setDescription(content);

       embed.setColor(Colr) 

       embed.setThumbnail(Thu)

       message.channel.send(embed);

       embed.setTimestamp()
       
       message.delete()
   }
}