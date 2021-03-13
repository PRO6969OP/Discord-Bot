const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Gives serverinfo',
    execute(client, message) {




        if (message.author.bot || !message.guild) return message.reply("this command for server only")
        var EMBED = new Discord.MessageEmbed()


            .setTitle("Server Info")

            .addFields(
                { name: '**Server Name**', value: `<a:arrow:805074053743378453> __${message.guild.name}__`, inline: true },

                { name: '**Server Owner**', value: `<a:arrow:805074053743378453> __${message.guild.owner}__`, inline: true },

                { name: '**Member Count**', value: `<a:arrow:805074053743378453> __${message.guild.memberCount}__` },

                { name: '**Total No. Of Roles**', value: `<a:arrow:805074053743378453> __${message.guild.roles.cache.size}__` },

                { name: '**Total No. Of Channels**', value: `<a:arrow:805074053743378453> __${message.guild.channels.cache.filter(r => r.type === "text").size} Text__ \n __<a:arrow:805074053743378453> ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice__` },

                { name: '**Server Region**', value: `<a:arrow:805074053743378453> __${message.guild.region}__`, inline: true },

                { name: '**Created On**', value: `<a:arrow:805074053743378453> __${message.guild.createdAt.toLocaleString()}__`, inline: true },

                { name: '**Boosts**', value: `<a:arrow:805074053743378453> __${message.guild.premiumSubscriptionCount}__`, },


            )

            .setFooter(`${message.author.username}`)

            .setThumbnail(message.guild.iconURL({ dynamic: true }))

            .setColor('df2390')

            .setTimestamp()


        message.channel.send(EMBED)
    }
}