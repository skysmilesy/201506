var io=require('socket.io')();
io.on('connection',function(socket){
    console.log('连接成功');
})
io.on('disconnection',function(){
    console.log('用户离开');
})
io.listen(8080);