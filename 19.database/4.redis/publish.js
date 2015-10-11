/**
 * Created by Administrator on 2015/9/26.
 * 发布和订阅是一种消息通信方式 解发布者和订阅者的关系
 *
 */
var redis=require('redis');
var client1=redis.createClient(6379,'localhost');
var client2=redis.createClient(6379,'localhost');
client1.on('subscribe',function(){
    console.log('subscribe global times');
    client2.publish('global times','xi11 jin ping go....');
    client2.publish('global times','xi22 jin ping go....');
    client2.publish('global times','xi33 jin ping go....');
});
var count=0;
client1.on('message',function(eventname,message){
    console.log(eventname,":::",message);


})
client1.subscribe('global times');