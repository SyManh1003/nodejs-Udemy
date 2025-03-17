// const express = require("express");
import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world nodemon")
})

app.listen(PORT, () => {
    console.log(`My app is running on Port ${PORT}`)
    //console.log("env port: ", process.env.PORT);
})