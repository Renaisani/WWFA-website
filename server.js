const express = require("express");
const app = express();

const path = require('path')
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})



app.listen(port, function() {
    console.log("Port started on port 3000");
})  