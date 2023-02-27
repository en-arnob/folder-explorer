const express = require("express");
require("dotenv").config();

const app = express();


app.get("/", (req, res) => {
    res.json({
        msg: 'Hello'
    })
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log('server running')
})
