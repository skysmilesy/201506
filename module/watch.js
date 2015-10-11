var fs=require('fs');
function exec(current,previous){
    if(Date.parse(previous.ctime)==0){
        console.log('new file success');
    }else if(Date.parse(current.ctime)==0){
        console.log('delete.....');
    }else{
        console.log('changed');
    }

}
fs.watchFile('write.txt',{interval:0},exec);