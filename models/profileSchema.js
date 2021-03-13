const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  UserID: { type: String, require: true, unique: true },
  GuildID: { type: String, require: true },
  coins: { type: Number, default: 1000 },
  bank: { type: Number },
});

const model = module.exports = mongoose.model("ProfileModels", profileSchema);