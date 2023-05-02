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

let connectedUsers = [];

// Some socket.io shenanigans, listens to connections and disconnections
// Also broadcasts messages to everyone
io.on('connection', (socket) => {
    socket.on("username", (name) => {
        socket.username = name;
        connectedUsers.push(name);
        io.emit("user connected", connectedUsers);
        io.emit("chat message", `User ${socket.username} has connected!`);
    });
    socket.on("chat message", (msg) => {
        if (socket.username) {
            io.emit("chat message", `${socket.username}: ${msg}`);
        } else {
            io.emit("chat message", `ID ${socket.id}: ${msg}`);
        }
    });
    console.log(`User with ID ${socket.id} has connected!`);
    console.log(connectedUsers)
    socket.on('disconnect', () => {
        const index = connectedUsers.indexOf(socket.username);
        if (index > -1) {
            connectedUsers.splice(index, 1);
        }
        io.emit("user connected", connectedUsers)
        console.log(`User with ID ${socket.id} has disconnected!`);
    });
});

// Initializes the connection on port 3000
// Notice that it is using the server.listen and not app.listen
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
