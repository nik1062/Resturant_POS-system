const mongoose = require("mongoose");
const { CONFIG } = require("./index");

// MongoDB Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(CONFIG.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        // Don't exit in development to allow debugging
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
