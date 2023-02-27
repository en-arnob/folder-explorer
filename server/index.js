const express = require("express");
require("dotenv").config();
const connect = require("./config/db");

const app = express();

//db con
connect();

app.get("/", (req, res) => {
    res.json({
        msg: 'Hello'
    })
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log('server running')
})
