var dgram=require('dgram');
var server=dgram.createSocket('udp4');
socket.on('message',function(msg,rinfo){
    console.log('接收到了',msg);
    console.log('客户端地址为',rinfo);
    var buf = new Buffer('确认信息:'+msg);
    //向对方发消息
    socket.send(buf,0,buf.length,rinfo.port
        ,rinfo.address);
});
socket.on('listening',function(){
    console.log('开始监听',socket.address());
})
//绑定IP和地址
socket.bind(44444,'localhost');
