var n=1;
var s="hello";
var f="global f";
function fn(){
    console.log(n);
    console.log(s);
     n=2;
    var n=3;
    var f="fnn f";
    function inner(){
        console.log(n);
        console.log(s);
        console.log(f);
    }
    inner();
}
fn();
