/**
 * Created by Administrator on 2015/9/12.
 * TCP �������Э��
 * ���ͷ����ֽ���ת�ɱ��ģ������ݽ���IP�㣬���շ�������װ
 * ���ַ�������ȫ��֪
 * �����������֣�
 * �Ự�У��������Ϳͻ����ṩһ��SOCKET��������ͬ�γ�һ������
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
