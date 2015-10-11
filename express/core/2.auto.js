
/**
 根据我们的请求路径自动映射
 **/
var url = require('url');
var http = require('http');
var handlers = {
    userManage:{
        user:{
            add:function(req,res,name,pasword){
                res.end('user add '+name+' '+pasword);
            },
            delete:function(req,res,id){
                res.end(' delete user'+id);
            },
            update:function(req,res,id){
                res.end(' update user'+id);
            }
        }
    }

}
http.createServer(function(req,res){
    // /user/add/zhangsan/123456
    // '' user  add zhangsan 123456
    var pathname = url.parse(req.url).pathname;
    var paths = pathname.split('/');
    var controller = paths[1];
    var action = paths[2];
    var args = paths.slice(3);
    if(handlers[controller] && handlers[controller][action]){
        var handler = handlers[controller][action];
        handler.apply(null,[req,res].concat(args));
    }else{
        res.end('404');
    }
}).listen(8080);