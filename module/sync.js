var fs=require('fs');
var data=fs.readFileSync('./file.txt','utf8');
console.log(data);
fs.readFile('./file.txt','utf8',function(err,data){
    console.log('22');
})