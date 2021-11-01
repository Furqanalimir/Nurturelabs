const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try
    {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log(`database connected!`);
    } catch (err)
    {
        console.log(`mongodb connection error: ${err}`)
        exit(1)

    }
}

module.exports = connectDB;