var path=require('path');
var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io')(http);
app.set('view engine','html');
app.set('views',path.resolve(__dirname,'views'));
app.engine('html',require('ejs'))
