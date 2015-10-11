/**
 * Created by Administrator on 2015/9/12.
 */
var fs=require('fs');
var file=fs.createReadStream('1.txt');
file.on('readable',function(){
    //var data=file.read(64*1024);
    //console.log('readable');
    var chunk=file.read(100);
    if(chunk){
        console.log(chunk);
    }

})
