const Discord = require('discord.js');

module.exports = {
  name: 'setnick',
  description: 'changes a nickname of a members',


run: async (client, message, args) => {
  const target = member.mentions.users.first();
  const name = args.slice(1).join(' ');
  
  target.setNickname(name)
  message.channel.send('nickname changed')
  
  }
}
