var fs=require('fs');
fs.writeFile('./write.txt','第一竺',{encoding:'utf8',flag:'a'},function(err){
    console.log('写入文件完毕');
})
fs.writeFile('./write.txt','第一竺ssssssssss',{encoding:'utf8',flag:'a'},function(err){
    console.log('写入文件完毕');
})