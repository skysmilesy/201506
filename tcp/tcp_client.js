/**
 * Created by Administrator on 2015/9/12.
 */
var net=require('net');
var util=require('util');
var socket=new net.Socket();
socket.setEncoding('utf-8');
socket.connect(8080,'127.0.0.1',function(){
    socket.write('hello')
})
socket.on('data',function(data){
    console.log(data);
})