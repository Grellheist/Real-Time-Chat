const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

io.on('connection', (socket) => {
    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
    });
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
