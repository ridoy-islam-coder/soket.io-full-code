const express = require('express')
const app = express()
const port = 3000
const { createServer } = require('http')
const httpServer = createServer(app)

const { Server } = require('socket.io')
const io = new Server(httpServer)

// io.on('connection', function (socket) {
//   console.log('a user connected')


// setTimeout(() => {
//     socket.send( 'Welcome to the Socket.IO server!')
//   }, 1000)


// setInterval(function () {

//     let d=new Date()
//     let t=d.getTime()
//     socket.emit("myEvent",t)
//   }, 500)






// let buyNme=io.of('/buy');

// buyNme.on('connection', function (socket) {
//   buyNme.emit('hi', 'Hello from the buy namespace!');
// })





// let sellNme=io.of('/sell');
// sellNme.on('connection', function (socket) {
//   sellNme.emit('hi', 'Hello from the sell namespace!');
// })



















// io.sockets.emit('hi', 'Hello everyone!')


io.on('connection', function (socket) {
socket.on('chat', function (myInput) {
 socket.emit('myEvent', myInput)
})



  })








//   socket.on('disconnect', function () {
//     console.log('user disconnected')
//   })
// })

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
