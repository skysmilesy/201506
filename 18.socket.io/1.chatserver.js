var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine','html');
//指定模板的存放目录
app.set('views',path.resolve(__dirname,'views'));
//指定模板引擎
app.engine('html',require('ejs').__express);//使用ejs来渲染模板
//静态文件服务器
app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.static(__dirname));
//当访问首页的时候把此模板返回给客户端
app.get('/',function(req,res){
    res.render('index');
});
var users ={};
//监听客户端的请求
io.on('connection',function(socket){
    var username ;
    var currentRoom;
    socket.emit('message',{user:'系统',content:'请输入呢称'});
    //socket.send({user:'系统',content:'请输入呢称'});
    socket.on('inRoom',function(roomName){
        socket.leave(currentRoom);
        socket.join(roomName);
        currentRoom = roomName;
    });
    //监听 客户端发过来的消息
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
                    socket.send({user:'系统',content:'你要私聊的人不在线!'});
                }
            }else{
                if(currentRoom){
                    //socket.broadcast.to(currentRoom).emit('message',{user:username,content:msg});
                    console.log(currentRoom);
                    io.to(currentRoom).emit('message',{user:username,content:msg});
                }else{
                    //socket.broadcast.emit('message',{user:username,content:msg});
                    //io.send({user:username,content:msg});//向客户端发消息
                }
            }
        }else{
            username = msg;//设置呢称
            users[username] = socket;//保存当前的socket
            socket.join('hall');
            currentRoom = 'hall';
            io.to(currentRoom).emit('message',{user:'系统',content:'欢迎<span class="user">'+username+'</span>加入聊天室'});
            //io.send({user:'系统',content:'欢迎<span class="user">'+username+'</span>加入聊天室'});
        }

    });
});
server.listen(8080);