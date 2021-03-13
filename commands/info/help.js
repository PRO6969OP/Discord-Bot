const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Gives Help',

    execute(client, message) {

        const embed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle('Command List Of DJ PRO')
            .setAuthor('DJ PRO', message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setFooter('Make Sure Not To Use () In Any Of Commands!!', 'https://cdn.discordapp.com/emojis/797429643245387797.gif?v=1')
            .setDescription(`This are all commands of __**DJ PRO**__. \n Usage:- *<command> \n If having issues let us know Join Suppoer server [By Clicking On This Link](https://discord.gg/6pVUJnq3aq)\n Our Official Website [DJ PRO](https://website-gg.herokuapp.com/) Documentation Comming Soon on Website\n MORE COMMANDS ADDING SOON!!`)
            .addFields(
                { name: '**MODERATION**', value: '📤`ban` `kick`\n🤐`mute` `unmute`\n✍️`slowmode`\n ⚠️`warn` `clear`\n 🔒`lock` `unlock`', inline: true },
                { name: '**INFO**', value: '🔖`serverifno` `avatar`', inline: true },
                { name: '**FUN**', value: '😁`meme` `pfp`' } 
            )

        message.author.send(embed).catch(() => message.channel.send(`${message.author} I failed to Dm U make sure your dms are enabled`));
       
        }
}
