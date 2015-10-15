var http=require('http');
var url=require('url');
var fs=require('fs');
var server=http.createServer(function(req,res){
   var urlObj=url.parse(req.url);
    var pathname=urlObj.pathname;
    var query=urlObj.query;
    console.log(urlObj);
    if(pathname === '/'){
        pathname='/index.html';
    }
    fs.readFile(pathname.substr(1),'utf-8',function(err,data){
        if(err){
            res.writeHead(404);
            res.end('page not found');
        }else{
            res.end(data);
        }
    })


})
server.listen(8888);