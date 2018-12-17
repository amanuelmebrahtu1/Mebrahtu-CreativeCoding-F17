var port = 8000;

//load dependencies into the node.js framework
var express = require('express');

// launch the server app through express
var app = express();

// connect to the specified port (on localhost)
var server = app.listen(port);

//serve all files in the "public" directory
app.use(express.static('sketch'));

console.log("The server is running");



//when type "connection" happens, call function newConnection

//when a connection happens, a socket is made
//which will be the argument to the resulting function
