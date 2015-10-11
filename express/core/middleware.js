/**
 * Created by Administrator on 2015/9/19.
 * ÖÐ¼ä¼þ£¬
 *
 */
var express=require('express');
var path=require('path');
var app=express();
app.use('/mny',function(req,res,next){
    res.mny=100;
    next();
});
app.use('/mny',function(req,res,next){

});
app.use('/mny',function(req,res,next){

});
app.listen(8080);