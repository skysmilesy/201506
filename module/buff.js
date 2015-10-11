var str1='珠峰培训';
var buf=new Buffer(str1);
console.log(buf.toString('utf8',3,9));


var buf5=new Buffer(12);
buf5.write('珠峰',0,3);
buf5.write('培训',3,3);

var buff1=new Buffer('珠峰');
var buff2=new Buffer('培训');

console.log(buf5.toString());
console.log(Buffer.concat([buff1,buff2],13))


var buf3=new Buffer(6);
buff2.copy(buf3,0,0,6);
console.log(buf3.toString());
console.log(buf3 instanceof Object);
console.log(Buffer.isBuffer(buf3));
console.log(Buffer.byteLength('培训'));
console.log(Buffer.isEncoding('utf8'));

