var dgram=require('dgram');
var server=dgram.createSocket('udp4');
socket.on('message',function(msg,rinfo){
    console.log('���յ���',msg);
    console.log('�ͻ��˵�ַΪ',rinfo);
    var buf = new Buffer('ȷ����Ϣ:'+msg);
    //��Է�����Ϣ
    socket.send(buf,0,buf.length,rinfo.port
        ,rinfo.address);
});
socket.on('listening',function(){
    console.log('��ʼ����',socket.address());
})
//��IP�͵�ַ
socket.bind(44444,'localhost');
