var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine','html');
//ָ��ģ��Ĵ��Ŀ¼
app.set('views',path.resolve(__dirname,'views'));
//ָ��ģ������
app.engine('html',require('ejs').__express);//ʹ��ejs����Ⱦģ��
//��̬�ļ�������
app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.static(__dirname));
//��������ҳ��ʱ��Ѵ�ģ�巵�ظ��ͻ���
app.get('/',function(req,res){
    res.render('index');
});
var users ={};
//�����ͻ��˵�����
io.on('connection',function(socket){
    var username ;
    var currentRoom;
    socket.emit('message',{user:'ϵͳ',content:'�������س�'});
    //socket.send({user:'ϵͳ',content:'�������س�'});
    socket.on('inRoom',function(roomName){
        socket.leave(currentRoom);
        socket.join(roomName);
        currentRoom = roomName;
    });
    //���� �ͻ��˷���������Ϣ
    socket.on('message',function(msg){
        if(username){
            // @zry hello
            var result = msg.match(/^@(.+)\s(.*)/);
            if(result){
                var toUser = result[1];
                var content = result[2];
                if(users[toUser]){
                    users[toUser].send({user:username,content:content});
                }else{
                    socket.send({user:'ϵͳ',content:'��Ҫ˽�ĵ��˲�����!'});
                }
            }else{
                if(currentRoom){
                    //socket.broadcast.to(currentRoom).emit('message',{user:username,content:msg});
                    console.log(currentRoom);
                    io.to(currentRoom).emit('message',{user:username,content:msg});
                }else{
                    //socket.broadcast.emit('message',{user:username,content:msg});
                    //io.send({user:username,content:msg});//��ͻ��˷���Ϣ
                }
            }
        }else{
            username = msg;//�����س�
            users[username] = socket;//���浱ǰ��socket
            socket.join('hall');
            currentRoom = 'hall';
            io.to(currentRoom).emit('message',{user:'ϵͳ',content:'��ӭ<span class="user">'+username+'</span>����������'});
            //io.send({user:'ϵͳ',content:'��ӭ<span class="user">'+username+'</span>����������'});
        }

    });
});
server.listen(8080);