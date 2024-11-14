// models/Item.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  PC_Name: String,
  State: String,
  Winning_Candidate: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
