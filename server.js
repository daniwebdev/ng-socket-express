const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log('Client Connected');
    
    socket.on('sender', data => {
        let obj = {
            name: data.name,
            message: data.msg
        };
    
        io.emit('recived', obj);
    })
})

http.listen(8081);