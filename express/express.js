/**
 * Created by Administrator on 2015/9/19.
 * web ��ܣ�ģ���������̬�ļ������м����·�ɿ��ƣ�
 * �쳣����
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