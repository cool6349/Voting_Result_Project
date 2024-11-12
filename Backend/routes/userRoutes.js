// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/usercontroller');

// Route to create a user
router.post('/users', createUser);

// Route to get all users
router.get('/users', getUsers);

module.exports = router;
