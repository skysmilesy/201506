var http = require('http');
var mime = require('mime');// npm install mime
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    var url = req.url;
    //  /params?name=zfpx&age=3
    var urls = url.split('?');
    var pathname = urls[0];
    var queryObj = {};
    var query = urls[1];
    if(query){
        var fields  = query.split('&');
        fields.forEach(function(field){
            var vals = field.split('=');//age=3
            queryObj[vals[0]] = vals[1];
        })
    }

    if(pathname == '/'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/ajax'){
        res.end('����');
    }else if(pathname == '/params'){
        res.end(JSON.stringify(queryObj));
    }else{
        var filename = '.'+pathname;
        console.log(path.extname(filename));
        if(path.extname(filename)=='.mp3'){
            res.setHeader('Content-Type','application/streamingmedia');
        }else{
            res.setHeader('Content-Type',mime.lookup(pathname));
        }
        fs.exists(filename,function(exists){
            if(exists){
                fs.readFile(filename,function(err,data){
                    res.end(data);
                })
            }else{
                res.end('404����ʵ�·��������');
            }
        })

    }
}).listen(8080);