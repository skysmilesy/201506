var net = require('net');
var util = require('util');

var socket = new net.Socket();
socket.setEncoding('utf8');
socket.connect(9999,'192.168.100.100',function(){
    console.log(socket.remoteAddress,socket.remotePort,socket.localAddress,socket.localPort);
    socket.write('hello');
});
socket.on('data',function(data){
    console.log('服务器端的问候:'+data);
})