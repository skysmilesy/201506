var Water = require('waterline');
var diskAdapter = require('sails-disk');//适配器,可以适配不同的存储数据库
var config = {
    adapters:{
        disk:diskAdapter //指定适配器
    },
    connections:{
        myLocalDisk:{
            adapter:'disk',//使用哪个适配器
            filePath:'./data'//指定要存储在哪个目录下
        }
    }
}
//定义模型
var User = Water.Collection.extend({
    identity:'user',//模型的名称
    connection:'myLocalDisk',//存储的位置
    attributes://有哪些字段和类型
    {
        first_name:'string',
        last_name:'string'
    }
});

var orm = new Water();
orm.loadCollection(User);//把模型注册到ORM里

orm.initialize(config,function(err,models){//初始化这个模块
    if(err)
        throw err;
    models.collections.user.create({
        first_name:'li',
        last_name:'si'
    },function(err,ret){
        console.log(ret);

    })

})