
/**
 * Created by Administrator on 2015/9/12.
 */
function Person(){

}
Person.prototype.name='zfpx';
Person.prototype.showName=function(){
    console.log(this.name);
}
var person=new Person();
person.showName();
function animal(name,food){
    this.food=food;
    this.name=name;
    this.getName=function(){
        return this.name;
    }
}
animal.prototype.food='meat';
