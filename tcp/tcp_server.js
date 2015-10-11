/**
 * Created by Administrator on 2015/9/12.
 * TCP 传输控制协议
 * 发送方将字节流转成报文，将数据交给IP层，接收方重新组装
 * 对字符编码完全无知
 * 传输三次握手，
 * 会话中，服务器和客户端提供一个SOCKET，两个共同形成一个连接
 *
 */
var net =require('net');
var util=require('util');
var fs=require('fs');
net.createServer(function(socket){
    console.log(util.inspect(socket.address()));
    server.getConnections(function(err,count){
        console.log(count);
        socket.on('data',function(chunk){
            console.log(chunk);
            console.log(socket.bytesRead);
        })
        socket.on('end',function(){

        })
    })
    server.listen(8080,'0.0.0.0',function(){

    })
})
