/**
 * Created by Administrator on 2015/9/12.
 *
 */
var person={
    name:'zfpx',
    say:function(words){
        console.log(this.name+"==say==="+words);
    }
}
person.say("hello");
var p={
    name:'node.js'
}
//person.say.call(p,"hello5");
var newSay=person.say.bind(p,"hello5");
newSay('word');
