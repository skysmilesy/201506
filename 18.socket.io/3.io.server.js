var io=require('socket.io')();
io.on('connection',function(socket){
    console.log('���ӳɹ�');
})
io.on('disconnection',function(){
    console.log('�û��뿪');
})
io.listen(8080);