const express = require("express");
require("dotenv").config();
const connect = require("./config/db");
const routes = require("./routes/router");

const app = express();

//db con
connect();
app.use(routes);
app.get("/", (req, res) => {
    res.json({
        msg: 'Hello Ostad!'
    })
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
