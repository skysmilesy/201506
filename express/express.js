/**
 * Created by Administrator on 2015/9/19.
 * web 框架，模板解析，静态文件服务，中间件，路由控制，
 * 异常处理
 */
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.end('hello world3222222222');
})
app.get('/contact',function(req,res){
    res.send('welcome to contact us..');
})
app.get('contact',function(req,res){
    res.send('welcome to contact us..');
})
app.listen(8080);