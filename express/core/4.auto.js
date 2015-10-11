/**
 根据我们的请求路径自动映射
 **/
var url = require('url');
var http = require('http');
http.createServer(function(req,res){
    // /user/add/zhangsan/123456
    // '' userManage user  add zhangsan 123456
    var pathname = url.parse(req.url).pathname;
    var paths = pathname.split('/');
    var controller = paths[1];
    var handler = require('./handler/'+controller);
    var action = paths[2];
    var args=paths.slice(3);
    var
    handler[action](req,res);
}).listen(8080);