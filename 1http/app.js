var http = require('http');
var url = require('url');
var config = require('./config');
var mime = require('mime');
var path = require('path');
var fs = require('fs');
var zlib = require('zlib');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if(pathname.slice(-1)=='/'){
        pathname = pathname +'index.html';
    }
    var realPath = path.join('public',pathname);
    console.log(realPath);
    var ext = path.extname(realPath);//获取文件的扩展名
    console.log(ext);
    if(ext.match(config.Expires.fileMatch)){
        fs.stat(realPath,function(err,stat){
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write('资源不存在');
                res.end();
            }
            8252 9990


            //上次修改时间
            var lastModified = stat.mtime.toUTCString();
            if(req.headers['if-modified-since'] &&req.headers['if-modified-since']==lastModified ){
                res.writeHead(304,http.STATUS_CODES[304]);
                return  res.end();
            }else{
                res.setHeader('Last-Modified',lastModified);
                var expires = new Date(new Date().getTime()+config.Expires.maxAge*1000);
                res.setHeader('Expires',expires.toUTCString());
                res.setHeader('Cache-Control','max-age='+config.Expires.maxAge);
                var rawRs = fs.createReadStream(realPath);
                //Accept-Encoding:gzip, deflate, sdch
                var acceptEncoding = req.headers['accept-encoding'];
                var match = ext.match(config.Compress.match);
                console.log(ext,config.Compress.match,match);
                if(match && acceptEncoding.match(/\bgzip\b/)){
                    res.writeHead(200,{'Content-Encoding':'gzip'});
                    rawRs.pipe(zlib.createGzip()).pipe(res);
                }else if(match && acceptEncoding.match(/\bdeflate\b/)){
                    res.writeHead(200,{'Content-Encoding':'deflat'});
                    rawRs.pipe(zlib.createDeflate()).pipe(res);
                }else{
                    rawRs.pipe(res);
                }

            }
        })
    }else{
        res.writeHead(200,{'Content-Type':mime.lookup(realPath)});
        fs.createReadStream(realPath).pipe(res);
    }
}).listen(8080);