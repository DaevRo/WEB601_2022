//ANCHOR To run "node app.js" in bash terminal

//create a variable named express that has a value of the express library
const express = require('express');

const log = require('morgan');
const http = require("http");

// asign variable app as a function
const app = express();

//calling app function using method with http url response and request parameters in es6 which returns a response with the send method parameter that contains the string "hello world"
app.get("/", (req, res) => {
    
    res.send("hello world");
});

//calling app function using the method listening with a parameter of 3000 and prints a string 
//listening on the local host 3000 port
http.createServer(app).listen(3000, () => {
    console.log("started on port 3000.")
    console.log("http://localhost:3000")
});