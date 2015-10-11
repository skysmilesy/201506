/**
 * Created by Administrator on 2015/9/12.
 * 文件内容太大，readFile; writeFile 一个整体文件
 * read write 需要非常精确的控制大小
 * 不关心文件内容大小，只关注，是否读到了数据，
 * 一组有序的，有起点和终点字节数据传输手段
 * 网络上传输的时候，先将对象转成字节流
 * 再经过流的传输，到达目的地后，再将字节流转成对象
 * 很多种类型，很多方法，很多事件
 *
 */
var fs = require('fs');
var file=fs.createReadStream('./1.txt',{start:1,end:3});
file.on('open',function(){
    console.log("file is opened.");
});
file.on('data',function(data){
    console.log(data);
})
file.on("end",function(){
    console.log('all readed.')
})
file.on('close',function(){
    console.log('file closed.');
})
file.on('error',function(){
    console.log('file closed.');
})