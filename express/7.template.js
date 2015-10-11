var express=require('express');
var app=express();
app.set('view engine','html');
app.set('view','./views');
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    res.render('index');
});
app.get('/del',function(req,res){
    res.render('index');
});
app.listen(8080);