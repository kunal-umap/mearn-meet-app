const express = require('express');
const connectDb = require('./database/dbconnection');


// dotenv file
require('dotenv').config({path:"./config.env"})

// setting port
const PORT = process.env.PORT || 8080;

// creating express instant
const app = express();
app.use(express.json());

// using database connection

connectDb();

// routes
app.use('/api',require('./router/router'));

app.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT}`)
})