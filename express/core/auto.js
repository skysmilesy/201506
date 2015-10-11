/**
 * Created by Administrator on 2015/9/19.
 */
var url=require('url');
var http=require('http');
var handlers={
    user:{
        add:function(req,res){
            res.end('user add');
        },
        delete:function(req,res){
            res.end('user delete');
        }
    }
}
http.createServer(function(req,res){
    var pathname=ure.parse(req.url).parthname;

}).listen(8080);