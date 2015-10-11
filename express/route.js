var express=require('express');
var app=express();
var path=require("path");
app.use("/",function(req,res,next){

})
app.use("/user",require("./route/user"));
app.listen(8080);