var fs=require('fs');
var BufferSize=1024;
function copy(src,desc){
var fdsrc,fddest;
    var readSofar;
    var buff=new Buffer(BufferSize);
    fdsrc=fs.openSync(src,'r');
    fddest=fs.openSync(desc,'w');
    var read=0;
    do{
        read=fs.readSync(fdsrc,buff,0,BufferSize,readSofar);
        fs.writeSync(fddest,buff,0,read);
        readSofar+=read;
    }while(read !=0)
}
copy('a.txt', 'b.txt');