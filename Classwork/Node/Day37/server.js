//dependencies injections
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//express setup
app.use(express.static('assets'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

//socket.io setup
io.on('connection', socket => {
  //setup rooms, let users first join 'lobby'
  let chatroom = 'lobby';
  socket.join(chatroom);
  socket.on('subscribe', room => {
    chatroom = room;
    socket.join(room);
  });

  //send message according to room
  socket.on('chat message', msg => io.to(chatroom).emit('chat message', msg));
});

//starting server
server.listen(3030, () => console.log(`server started at ${new Date()}`));