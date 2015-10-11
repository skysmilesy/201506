
var mysql= require('mysql');
var connection=mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'today'
});
connection.connect();
var username=
var sql='select * from user where username="zhangsan" and password="123456" ';
var sql3='select * from user where username=? and password=? ';
var sql2='select * from student';
connection.query(sql3,[['username'],username,password],function(err,rows,fileds){
    if(err) console.log(err);
    else{
        console.log(rows);
        if(rows.length)
        console.log("success");
        else
        console.log("faill");
        connection.destroy();
    }
})

