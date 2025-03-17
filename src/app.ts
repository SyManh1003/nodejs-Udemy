// const express = require("express");
import express from "express";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(PORT, () => {
    console.log(`My app is running on Port ${PORT}`)
    //console.log("env port: ", process.env.PORT);
})