var dgram=require('dgram');
var server=dgram.createSocket('udp4');
var message = new Buffer('���');

socket.send(message,0,message.length,44444,'localhost',function(err,bytes){
    if(err){
        console.log('����ʧ��');
    }else{
        console.log('�ѷ�����'+bytes+'�ֽ�');
    }
});

socket.on('message',function(msg,rinfo){
    console.log('���յ���',msg.toString());
    console.log('�ͻ��˵�ַΪ',rinfo);
});