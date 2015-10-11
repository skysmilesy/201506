var dgram=require('dgram');
var server=dgram.createSocket('udp4');
var message = new Buffer('你好');

socket.send(message,0,message.length,44444,'localhost',function(err,bytes){
    if(err){
        console.log('发送失败');
    }else{
        console.log('已发送了'+bytes+'字节');
    }
});

socket.on('message',function(msg,rinfo){
    console.log('接收到了',msg.toString());
    console.log('客户端地址为',rinfo);
});