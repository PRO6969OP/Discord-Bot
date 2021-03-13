const Discord = require('discord.js');

module.exports = {
  name: "whois",
  aliases: ["ui"],

  run: async (client, message, args) => {

  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:opa5:797429643245387797> You cant use this")


    const member = guild.members.cache.get(user.id);

    const embed = new Discord.MessageEmbed()

      .setAuthor(`User info for ${user.username}`)
      .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setColor('14f1fa')
      .setTimestamp()
      .addFields(
        {
          name: 'User tag',
          value: user.tag, inline: true
        },

        {
          name: 'User ID',
          value: member.id, inline: true
        },

        {
          name: 'Is bot',
          value: user.bot,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(), inline: true
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(), inline: true
        },
        {
          name: 'Roles',
          value: `<@&${member._roles.join('> <@&')}>`,

        });

    message.channel.send(embed)

    }
  }


