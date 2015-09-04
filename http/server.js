
var http= require('http');
var fs=require('fs');
http.createServer(function(req,res){
var url=req.url;
    if(url == '/'){
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(url == '/style.css'){
        fs.readFile('./style.css',function(err,data){
            res.end(data);
        })
    }
}).listen(8080);