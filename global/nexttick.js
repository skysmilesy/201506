/**
 * Created by Administrator on 2015/9/12.
 */
function say(){
    var sum=1;
    for(var i=1;i<100; i++){
       sum=sum*i;
    } console.log(sum);

}
function say2(){
    var sum=1;
    for(var i=1;i<100; i++){
        sum=sum*i;
    } console.log(sum);

}
//setTimeout(say(),3000);
process.nextTick(say);
setImmediate(say);
console.log('welcome1');
console.log('welcome2');