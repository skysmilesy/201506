module.exports = MyExpress;
//有请求时候的监听回调
function app(req,res){
    app.handle(req,res);
}

function MyExpress(){
    app.stack = [];//存放着所有的中间件
    return app;
}
//添加中间件 path 匹配路径 fn 对应的中间件函数
app.use = function(path,fn){
    if(typeof path == 'function'){
        fn = path;
        path = '/';//针对所有的路径生效
    }
    this.stack.push({path:path,handle:fn});
    console.log(this.stack);
}
//把所有的中间件取出来依次执行
app.handle = function(req,res){
    var index =0;
    var stack = this.stack;
    function next(){
        var layer = stack[index++];
        if(!layer){
            return;
        }
        var url = req.url ||'/';//请求的路径
        var path = layer.path;//得到此中间件的路径
        // url /a/b
        // layer /a
        if(url.indexOf(path)==0){//如果路径匹配 执行此中间件
            layer.handle(req,res,next);
        }else{
            next();//如果不匹配，执行下一个中间件
        }
    }
    next();
}