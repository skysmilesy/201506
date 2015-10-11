var net=require('net');
var util=require('util');
var clients={}
var server=net.createrServer(function(socket){
    var nickname;
    socket.write('welcome please input you name');
    socket.setEncoding('utf8');
    socket.on('data',function(chunk){
        if(nickname){

        }else{
            if(clients[nickname]){
                socket.write("please input name again");
            }else{
                nickname=chunk;
                clients[nickname]=socket;
                broadcast(nickname,'system'+nickname+"in this chat room");
            }
        }
    })
    function broadcast(nickname,msg){
        msg+=""
        for(var name in clients){

        }
    }

})