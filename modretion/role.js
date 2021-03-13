const Discord = require('discord.js');


module.exports = {
  
  name: 'role',
  description: 'gives role',
  
  run: async (client, message, args) => {

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === `${role}`)

    if(Member.roles.cache.has(role.id)) return message.channel.send(`${Member.displayName} alredy has that role`)
    await Member.roles.add(role);

    message.channel.send(`role added`)

  }
}