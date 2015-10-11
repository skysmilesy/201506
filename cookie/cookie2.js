var http = require('http');
var url = require('url');
var querystring = require('querystring');
/**
 * Name key
 * Value  值
 * Domain 域名
 * Path 路径 pathname
 * Expires/Max-Age 过期时间
 * HTTP  HttpOnly 不能通过JS访问
 * Secure  只能用于HTTPS
 */
var cookieParser = require('./cookieParser');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/write'){//写入cookie
        res.statusCode = 200;
        res.setHeader('Set-Cookie',[cookieParser.serialize(age,6,{
            domain:'localhost',
            path:'/read',
            httpOnly:true,
            maxAge:3600,
            expires:new Date(new Date().getTime()+3600*1000),
            Secure:true
        })]);
        res.end('ok');
    }else{
        //Cookie:   name=zfpx2; age=6
        //query     name=zfpx&age=6
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);