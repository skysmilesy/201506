var repl=require('repl');
var server=repl.start({});
var context=server.context;
context.name='zfpx';
context.age=6;
context.grow=function(num){
    console.log(context.name+'grow'+num);
    //console.log(this)
}
