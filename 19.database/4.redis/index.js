/**
 * Created by Administrator on 2015/9/26.
 */
var redis=require('redis');
var client=redis.createClient(6379,'localhost');
//var client=redis.createClient(6379,'123.57.143.189');
client.set('name2','zfpxa',redis.print);
client.hset('zry','name','zfa',redis.print);
client.hset('zry','age','85',redis.print);
client.hset('zry','age1','85',redis.print);
client.hkeys('zry',function(err,replies){
    console.log(replies);
    replies.forEach(function(reply){
        client.hget('zry',redis.print)
    })
})