module.exports = io => {
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
}
  