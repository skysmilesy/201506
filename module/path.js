var path=require('path');
/*
* ½âÎö
* */
console.log(path.normalize('.//a////b//d//..//c//e//..//'));
console.log(path.join(__dirname,'a','b','..','c'));
fs.readdir(__dirname,function(err,files){
    fs.readFile(path.join(__))
})