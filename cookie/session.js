var http=require('http');
var url=require('url');
var key='zdkey';
var session={};
var EXPIRE_TIME=3600;
http.createrServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
if(pathname=='/favicon.ico'){
    res.end('404');
}else{

}
}).listen(8080);