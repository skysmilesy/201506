var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('out.txt');
var server = net.createServer(function (socket) { //net.Socket
    console.log('a new connection');
    socket.setEncoding('utf8');
    //有数据先暂停
    socket.on('data',function(data){
        socket.pause();
    });
    socket.setTimeout(3000,function(){
        socket.resume();
        socket.pipe(out,{end:false});
    })


})

server.listen(9999,'192.168.100.100', function () {
    console.log('start listen at ' + util.inspect(server.address()));
});