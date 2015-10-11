/**
 根据我们的请求路径自动映射
 **/
var url = require('url');
var http = require('http');
var handlers = {
    // /userManage/user/add
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
    // /userManage/user/add/zhangsan/123456
    // '' userManage user  add zhangsan 123456
    var pathname = url.parse(req.url).pathname;
    var paths = pathname.split('/');
    var finalHandler = handlers;
    for(var i=1;i<paths.length;i++){
        if(finalHandler[paths[i]]){
            finalHandler = finalHandler[paths[i]];
            if(typeof finalHandler == 'function'){
                break;
            }
        }else{
            return  res.end('404');
        }
    }
    var args = paths.slice(i+1);
    finalHandler.apply(null,[req,res].concat(args));
}).listen(8080);