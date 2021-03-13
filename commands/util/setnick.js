const Discord = require('discord.js');

module.exports = {
  name: 'setnick',
  description: 'changes a nickname of a members',


run: async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You cant use this')
  const member = member.mentions.users.first();
  const nick = args.slice(1).join(' ');
  
  await member.setNickname(nick)
  message.channel.send('nickname changed')
  
  }
}
