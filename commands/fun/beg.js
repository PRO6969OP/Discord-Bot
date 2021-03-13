const Discord = require ('discord.js');
const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  permissions: [],
  description: "beg for coins",
  run: async (client, message, args) => {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    message.channel.send(`${message.author.username}, you begged and received ${randomNumber} **coins**`);
  },
};