var mysql = require('mysql');
/**
 * ���ӳش�������������
 * 1.��������ʱ��
 * 2.�򻯱��ģ��
 * 3.�ܿص���Դ����
 **/

var pool = mysql.createPool({
    host:'123.57.143.189',// ����
    user:'root',
    password:'zfpx2015',
    database:'today',
    connectionLimit:2,//���ӳ��������Դ������ٸ�����
    queueLimit:2      //�����еĵȴ��������� 0Ϊ������
})
pool.on('connection',function(){
    console.log('һ���µ����ӱ�����');
});
pool.on('enqueue',function(){
    console.log('���µĻص��������');
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