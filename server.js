// server.js (Final Clean Version)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://svidhata28_db_user:FeLX22EYScsljXPq@cluster0.p7qiv.mongodb.net/bustrack?retryWrites=true&w=majority')
.then(() => console.log("✅ Database Connected Successfully!"))
.catch((err) => console.log("❌ DB Connection Error:", err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
