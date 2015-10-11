/**
 * Created by Administrator on 2015/9/26.
 */
var util=require('util');
var fruit=require('./fruit');
module.exports=function(){
    this.desc=function(){
        console.log('i am a apple');
    }
}
util.inherits(apple,fruit);
module.exports=apple;