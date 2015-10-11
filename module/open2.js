var fs=require('fs');
//所有人，所属组， 其它
// 0 stdin   1 stdout  2 stderr

var buffer=new Buffer(3);
fs.open('./a.txt','sr+',438 /*0666*/,function(er,fd){
    console.log(fd);
    fs.write(fd,new Buffer([65]),0,1,1,function(){
        console.log(arguments);
    fs.read(fd,buffer,0,3,0,function(err,bytesRead,data){
        console.log(buffer.toString());
    })
    })
})

