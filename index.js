const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
