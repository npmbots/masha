require("./index.js")
const express = require('express');
const http = require('http');
const app = express();






app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://lontejapan.glitch.me/`);
}, 280000);





