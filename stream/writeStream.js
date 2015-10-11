/**
 * Created by Administrator on 2015/9/12.
 */
fs=require('fs');
var out=fs.createWriteStream('./write2.txt');
for(var i=0;i<=1024*10;i++){
    var flag=out.write(i.toString());
    console.log(flag);
}
out.on("error",function(err){
    console.log("error");
})
out.write("12333");
out.en
out.on('drain',function(){
    console.log("buffer all out...");
})