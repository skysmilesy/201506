/**
 * Created by Administrator on 2015/9/12.
 * �ļ�����̫��readFile; writeFile һ�������ļ�
 * read write ��Ҫ�ǳ���ȷ�Ŀ��ƴ�С
 * �������ļ����ݴ�С��ֻ��ע���Ƿ���������ݣ�
 * һ������ģ��������յ��ֽ����ݴ����ֶ�
 * �����ϴ����ʱ���Ƚ�����ת���ֽ���
 * �پ������Ĵ��䣬����Ŀ�ĵغ��ٽ��ֽ���ת�ɶ���
 * �ܶ������ͣ��ܶ෽�����ܶ��¼�
 *
 */
var fs = require('fs');
var file=fs.createReadStream('./1.txt',{start:1,end:3});
file.on('open',function(){
    console.log("file is opened.");
});
file.on('data',function(data){
    console.log(data);
})
file.on("end",function(){
    console.log('all readed.')
})
file.on('close',function(){
    console.log('file closed.');
})
file.on('error',function(){
    console.log('file closed.');
})