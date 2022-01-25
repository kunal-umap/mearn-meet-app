const express = require('express');
const connectDb = require('./connection/dbconnection');
const cors = require('cors');
const http =require('http');



// dotenv file
require('dotenv').config({path:"./config.env"});

// setting port
const PORT = process.env.PORT || 8080;

// creating express instant and server
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());

// using database connection

connectDb();

// routes

app.use('/api',require('./router/router'));


const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: [ "GET", "POST" ]
    }
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", {signal: data.signal, name: data.name})
	});
});


server.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT}`)
})