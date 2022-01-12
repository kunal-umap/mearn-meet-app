const express = require('express');

// dotenv file
require('dotenv').config({path:"./config.env"})

const PORT = process.env.PORT || 8080;

// express instant
const app = express();
app.use(express.json());

// routes
app.use('/api',require('./router/router'));

app.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT}`)
})