var fs=require('fs');
//�����ˣ������飬 ����
// 0 stdin   1 stdout  2 stderr
console.log(6+6*8+6*8*8);
var buffer=new Buffer(3);
fs.open('./file.txt','r',438 /*0666*/,function(er,fd){
console.log(fd);
    fs.read(fd,buffer,0,3,0,function(err,byte){
        console.log(buffer.toString());
    })
})
process.stdin.on('data',function(data){
    console.log(data.toString());
})
process.stdout.write('log');
process.stderr.write('error');
