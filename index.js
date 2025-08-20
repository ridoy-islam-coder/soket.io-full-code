const express = require('express')
const app = express()
const port = 3000
const { createServer } = require('http')
const httpServer = createServer(app)

const { Server } = require('socket.io')
const io = new Server(httpServer)

io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
