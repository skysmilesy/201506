/**
 * Created by Administrator on 2015/9/12.
 */
var fs=require('fs');
var val1='';
var val2='';
var count=0;
fs.readFile('1.txt','utf-8',function(err,data){
    done();
})
fs.readFile('2.txt','utf-8',function(err,data){
    done();
})
console.log(val1+val2);
function done(){
    count++;
    if(count==2){
        console.log(val1+"==="+val2);
    }
}