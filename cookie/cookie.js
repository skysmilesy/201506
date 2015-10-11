/**
 * Created by Administrator on 2015/9/13.
 */
var http=require('http');
var url=require('url');
http.createServer(function(res,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='./favicon.ico'){
        res.end('404');
    }else if(pathname == '/write'){
        res.statusCode=200;
        res.setHeader('Set-Cookie','name=zfpx');
        res.setHeader('Set-Cookie','age=6');
        res.end('ok');
        res.writeHeaders()
    }else if(pathname == '/read'){
        var cookieObj={};
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8899);