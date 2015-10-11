var mysql = require('mysql');
/**
 * 连接池创建并管理连接
 * 1.减少连接时间
 * 2.简化编程模型
 * 3.受控的资源引用
 **/

var pool = mysql.createPool({
    host:'123.57.143.189',// 主机
    user:'root',
    password:'zfpx2015',
    database:'today',
    connectionLimit:2,//连接池中最多可以创建多少个连接
    queueLimit:2      //队伍中的等待连接数量 0为不限制
})
pool.on('connection',function(){
    console.log('一个新的连接被创建');
});
pool.on('enqueue',function(){
    console.log('有新的回调进入队伍');
});

console.time('cost');
function start(){
    pool.getConnection(function(err,connection){
        if(err)
            console.error(err);
        else{
            connection.query('select * from user',function(err,rows){
                //console.log(rows.length);
                console.timeEnd('cost');
                // 0ms 0ms 1ms 1ms
                setTimeout(function(){
                    connection.release();
                },1000);
            });
        }
    });
}
start();
start();
start();
start();
start();