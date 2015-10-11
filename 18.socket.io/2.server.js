var webSocketServer=require('ws').Server;
var wss=new webSocketServer({port:8080});
wss.on('connection',function(ws){
    ws.on('message',function(message){
        console.log("received:",message);
        ws.send("hello client");
    })
})