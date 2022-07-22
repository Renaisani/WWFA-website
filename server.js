const express = require("express");
const app = express();

const path = require('path')
const port = process.env.PORT || 3000;

app.use("/static", express.static(path.join(__dirname, 'public')))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})



app.listen(port, function() {
    console.log("Port started on port 3000");
})