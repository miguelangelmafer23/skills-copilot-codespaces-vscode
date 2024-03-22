// Create web server
const express = require('express');
const app = express();
// Create a server
const http = require('http');
const server = http.createServer(app);
// Create socket.io
const io = require('socket.io')(server);
// Create a port
const port = 3000;
// Create a path
const path = require('path');
// Create a public folder
app.use(express.static(path.join(__dirname, 'public')));