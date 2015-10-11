/**
 * 观察者 发布订阅模式
 **/
function Event(name){
    this.name = name;
    this._events = {};
}
/**
 * {}
 */
//监听事件
Event.prototype.on = function(eventName,listener){
    if(this._events[eventName]){
        this._events[eventName].push(listener);
    }else{
        this._events[eventName] = [listener];
    }
}

//发射事件
Event.prototype.emit = function(eventName){
    var handlers = this._events[eventName];
    var args = Array.prototype.slice.call(arguments,1);
    for(var i=0;i<handlers.length;i++){
        handlers[i].apply(this,args);
    }
}

var teacher = new Event('teacher');
var me = function(name){
    console.log('I beat '+name);
}
teacher.on('fight',me);
var wife = function(name){
    console.log('wife beat '+name);
}
teacher.on('fight',wife);
//teacher.removeListener('fight',wife);
teacher.emit('fight','qihang')