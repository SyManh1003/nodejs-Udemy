const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world nodemon")
})

app.listen(PORT, () => {
    console.log(`My app is running on Port ${PORT}`)
})