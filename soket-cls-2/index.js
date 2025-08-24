const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});


io.on('connection',function(socket){
  io.socket.emit('muEvant','this is custom event');
})

io.on('connection', (socket) => {
  console.log('a user connected');



  

//  setTimeout(() => {
//     socket.send( 'Hello from server after 5 seconds!');
//   }, 5000);

// socket.on('message', (msg) => {
//     console.log('message: ' + msg);
    
//     })










  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});













server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});