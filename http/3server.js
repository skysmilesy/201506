var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var url = req.url;
    //  /params?name=zfpx&age=3
    var urls = url.split('?');
    console.log(urls);
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
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname == '/style.css'){
        fs.readFile('./style.css',function(err,data){
            res.end(data);
        })
    }else if(pathname == '/params'){
        res.end(JSON.stringify(queryObj));
    }
}).listen(8080);