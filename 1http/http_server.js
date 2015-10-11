/**
 * Created by Administrator on 2015/9/13.
 *
 */
var http=require('http');
var url=require('url');
var querystring=require('querystring');
var util=require('util');
var server=http.createServer();
server.on('connection',function(){
    console.log("连接建立");
})
server.on('request',function(req,res){
    console.log(req.url);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.headers);
    res.write('hello');
    res.end('hello');
})
server.listen(8080)