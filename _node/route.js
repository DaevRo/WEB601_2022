const express = require("express");
const path = require("path");
const http = require("http");

const router = express.Router()



const app = express();

app.get("/", (req, res)=> {
  res.end("Welcome to my homepage!");
});


app.use((req, res) => {
  res.statusCode = 404;
  res.end("404!");
});

  http.createServer(app).listen(3000);