const Discord = require('discord.js');


module.exports = {
  
  name: 'ping',
  description: 'ping command',
  
  run: async (client, message, args) => {
    message.channel.send('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping} \nAPI Latency: ${client.ws.ping}`)
    })
  },
}
