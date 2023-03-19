const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Uses port 3000 by default, otherwise uses the PORT environmental variable
const PORT = 3000 || process.env.PORT;

// Normal express stuff
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// Some socket.io shenanigans, listens to connections and disconnections
// Also broadcasts messages to everyone
io.on('connection', (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", `ID ${socket.id} said: ${msg}`);
    });
    console.log(`User with ID ${socket.id} has connected!`);
    socket.on('disconnect', () => {
        console.log(`User with ID ${socket.id} has disconnected!`);
    });
});

// Initializes the connection on port 3000
// Notice that it is using the server.listen and not app.listen
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
