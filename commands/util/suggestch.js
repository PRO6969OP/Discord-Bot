const mongoose = require('mongoose');
const Suggestion = require('../../models/suggestSchema');
module.exports = {
    name: 'suggestch',
    description: 'suggest channel',

    run: async(client, message, args) => {
        let Schannel = member.mentions.channels.first();
        let data = await suggestion.findOne({
            GuildID: message.guild.id,
            UserID: toWarn.id
        });
    
        if(data) {
            data.Suggestion.unshift({
                SuggestType: 'Text',
               
            });
            data.save();
    
            message.channel.send(`Suggestion will b send to ${Schannel}`)
        } else if (!data) {
            let newData = new punishments({
                GuildID: message.guild.id,
                UserID: toWarn.id,
                ChannelID: Schannel.id,
            });
            newData.save();
    
        }
    }
}