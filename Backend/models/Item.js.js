// models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  Party: String,
  Votes: Number,
  State: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
