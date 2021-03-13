const Discord = require('discord.js');
const mongoose = require('mongoose');
const Suggestion = require('../../models/suggestSchema');

module.exports = {
    name: 'suggest',
    description: 'suggestion',

    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed();

        let Schannel = require('./suggestch');

        let content = args.slice(0).join(' ')

        let MessageEmbed = await Schannel.send(embed);

    }
}