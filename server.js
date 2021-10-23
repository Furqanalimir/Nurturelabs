const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();

//init middleware
app.use(express.json());

//connect mongodb
connectDB()

//api routes
app.use('/api/user', require('./routes/api/auth'));
app.use('/api/admin', require('./routes/api/advisor'));
app.use('/api/appiontment', require('./routes/api/appiontment'));

app.use('/', require('./routes/api/get'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`);
})