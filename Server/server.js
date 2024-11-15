const express = require('express');
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/dbconnect');


connectDB();

const PORT = process.env.PORT || 8001;
app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});