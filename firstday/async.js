var count=0;
var eatBao=function(){
    setTimeout(function(){
        console.log("eat bao");
        if(++count==2){
            done()
        }
    },1000);
}
var eatBao2=function(){
    setTimeout(function(){
        console.log("eat bao2222");
        if(++count==2){
            done()
        }
    },1000)
}
var done=function(){
    console.log("eat finished....");
}
eatBao();
eatBao2();
