// controllers/itemController.js
const Item = require("../models/Item.js");
// Controller to get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllItems };