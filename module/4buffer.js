//���������ṩ����
//var buffer1=new Buffer(12);
//buffer1.fill(0x0f,1,3);
//var buffer2=new Buffer([1,2,3,4]);
//var buffer3=new Buffer('z�����ѵ');

//console.log(buffer1);
//console.log(buffer2);
//console.log(buffer3);
//var s=0xff;
//console.log(16+16*15);
var str1='�����ѵ';
var buf=new Buffer(str1);
console.log(str1.length);
console.log(buf.length);
var subs=str1.slice(1,2);
var subb=str1.slice(1,2);