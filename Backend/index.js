const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express(); // Define app here

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', itemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
