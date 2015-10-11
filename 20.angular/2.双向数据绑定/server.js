var express=require('express');
var app=express();
app.post('./user',function(req,res){
    var user=req.query;
    res.send(user);
})
app.get('*',function(req,res){
    res.
});
app.listen(80);