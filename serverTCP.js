const express = require("express");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


var interfaces = require('os').networkInterfaces()


console.log(interfaces);
app.use(express.static("public"));


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('scann message', function(msg){
    io.emit('scann message', msg);
  });
  socket.on('connected', function(msg){
    io.emit('connected', msg);
  });
});

http.listen(port,"192.168.121.109", function(){
  console.log('listening on *:' + port);
});

