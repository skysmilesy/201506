var fs=require('fs');
fs.mkdir('t/t',function(err){
    if(err){
        console.log('create failed');
    }else{
        console.log('success,success')
    }
})

function makeP(path){

}