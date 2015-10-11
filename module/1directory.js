var fs=require('fs');
makeP('test2/test3/test4',function(err){
    if(err){
        console.log('create failed');
    }else{
        console.log('success,success')
    }
})

function makeP(path){
 var paths=path.split('/');
    for(var i=0; i<paths.length; i++){
paths.slice(0,i).join('/');
        var exists=fs.existsSync(p);
        if(exists){
            continue;
        }else{
            fs.mkdirSync(p);
        }
    }
}
//fs.stat('a.txt',function(err,stat){
//    console.log(stat);
//})
fs.unlinkSync('a.txt');
