var async = require('async');
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://123.57.143.189/zfblog');
//模型定义
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;//自动生成的对象ID
var  AuthorSchema = new Schema({
    name:String
});
//作者


var Author = connection.model('Author',AuthorSchema);

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
/*
 var tasks = [];
 for(var i=1;i<=10;i++){
 (function(i){
 tasks.push(function(next){
 new Article({
 title:'title'+i,
 content:'content'+i,
 author:'56060e52358a517014698905',
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
 }*/
///串行执行，一个任务完成后才能执行下一个任务
/*async.series(tasks,function(err,result){
 console.log('全部插入完成');
 })*/

//分页参数 pageNumber pageSize
//返回值 pages articles
/*
 var pageNumber = 2;
 var pageSize = 5;
 Article.count({},function(err,count){//返回总记录数
 var pages = Math.ceil(count/pageSize);//计算总页数
 var skip = (pageNumber-1)*pageSize;
 Article.find({}).skip(skip).limit(pageSize).sort({createAt:1}).populate('author').exec(function(err,articles){
 console.log(pages,articles);
 });
 });
 */

/*Article.update('56060e7b37116b08196d6096',{$set:{'stat.favs':100}},function(err,ret){
 console.log(ret);
 });*/
/*Article.update('56060e7b37116b08196d6096',{$inc:{'stat.favs':200}},function(err,ret){
 console.log(ret);
 });*/

/*Article.update('56060e7b37116b08196d6096',{$push:{'comment':{content:'我是追加的评论'}}},function(err,ret){
 console.log(ret);
 });*/

/*
 Article.find({_id:'56060e7b37116b08196d6096'},function(err,ret){
 console.log(ret);
 });
 */
Article.findOne({_id:'56060e7b37116b08196d6096'},function(err,ret){
    console.log(ret);
});
/*
 Article.remove({_id:'56060e7b37116b08196d6096'},function(err,ret){
 console.log(ret);
 });*/