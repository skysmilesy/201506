var async = require('async');
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://123.57.143.189/blog');
//模型定义
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;//自动生成的对象ID
var  AuthorSchema = new Schema({
    name:String
});
//作者
var Author = connection.model('Author',AuthorSchema);
var Auth = connection.model('Auth',AuthorSchema);
//评论的模型
var CommentSchema = new Schema({
    content:String,//评论的内容
    createAt:{type:Date,default:Date.now}
});
//文章的模型
var ArticleSchema = new Schema({
    title:{type:String,unique:true}, //标题
    content:String,//正文
    author:{type:ObjectId,ref:'Author'},//作者
    stat:{
        favs:Number,//收藏数
        visited:Number//访问量
    },
    comment:[CommentSchema]
});
//定义文章的模型，可以与数据进行互动
var Article = connection.model('Article',ArticleSchema);

//保存用户
//{ __v: 0, name: '张三', _id: 56060098fbc60b8c1489c72f }
/*
 new Author({name:'张三'}).save(function(err,author){
 if(err)
 console.error(err);
 else
 console.log(author);
 });
 */
//中间件
ArticleSchema.pre('save',function(next){
    this.stat.visited = Math.floor(Math.random()*1000);
    if(this.title){
        next();
    }else{
        console.error('标题不能为空');
    }
});

var tasks = [];
for(var i=1;i<=10;i++){
    (function(i){
        tasks.push(function(next){
            new Article({
                title:'titleqq'+i,
                content:'contentqq'+i,
                author:'56060098fbc60b8c1489c72f',
                stat:{
                    favs:0,//收藏数
                    visited:0//访问量
                },
                comment:[{content:'comment'+i}]
            }).save(function(err,article){
                    if(err)
                        console.error(err);
                    else
                        console.log(article);
                    next();
                });
        });
    })(i);

}
async.series(tasks,function(err,result){
    console.log('全部插入完成');
})