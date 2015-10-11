/**
 * Created by Administrator on 2015/9/13.
 */
var http=require('http');
var options={
    host:'localhost',
    port:8080,
    method:'GET',
    path:'/post',
    headers:{name:'china'
    }
}
http.request(options,function(res){
    console.log(res.statusCode);
    res.setEncoding('utf8');
})
