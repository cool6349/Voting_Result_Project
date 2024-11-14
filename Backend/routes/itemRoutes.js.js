// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const { getAllItems } = require("../controllers/itemController");

// Route to get all items
router.get("/items", getAllItems);

module.exports = router;