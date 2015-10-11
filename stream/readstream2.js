/**
 * Created by Administrator on 2015/9/12.
 * http.IncomingMessage request
 *
 * net.socket
 * http.serverResponse
 * response
 * process.stdout
 * process.stderr
 * ungzip
 */
fs=require('fs');
var infile=fs.createReadStream('./1.txt');
var out=fs.createWriteStream('./223.txt');
infile.on('data',function(data){
    var flag=out.write(data);
    if(!flag){
        read.pause();
    }
})
out.on('drain',function(){
    console.log('操作系统读完了.')
    read.resume();
})
infile.pipe(out);
