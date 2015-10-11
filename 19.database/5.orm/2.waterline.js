var Water = require('waterline');
var diskAdapter = require('sails-disk');//适配器,可以适配不同的存储数据库
var mysqlAdapter = require('sails-mysql');
var mongoAdapter = require('sails-mongo');

var config = {
    adapters:{
        disk:diskAdapter, //指定适配器
        mysql:mysqlAdapter,
        mongo:mongoAdapter
    },
    connections:{
        myLocalDisk:{
            adapter:'disk',//使用哪个适配器
            filePath:'./data'//指定要存储在哪个目录下
        },
        localMysql:{
            adapter:'mysql',
            host:'123.57.143.189',
            port:3306,
            user:'root',
            password:'zfpx2015',
            database:'test'
        },
        localMongo:{
            adapter:'mongo',
            host:'123.57.143.189',
            port:27017,
            database:'water'
        }
    }
}
//定义模型
var User = Water.Collection.extend({
    identity:'users',//模型的名称
    connection:'localMysql',//存储的位置
    attributes://有哪些字段和类型
    {
        username:{
            type:'string',
            onlyNumber:true
        },
        password:{
            type:'string',
            required:true //必填，不报会保存不成功
        },
        email:{
            type:'string'
        },
        id:{
            type:'integer',
            autoIncrement:true
        },
        birthDay:{
            type:'date'
        }
    },types:{
        onlyNumber:function(content){
            return /^\d+$/.test(content);
        }
    }
});
// 导入适配器-> 创建连接-> 模型 ->实例化模型->操作数据
var orm = new Water();
orm.loadCollection(User);//把模型注册到ORM里

orm.initialize(config,function(err,models){//初始化这个模块
    if(err)
        throw err;
    models.collections.users.create({
     username:'1234test',
     password:'123',
     email:'zhang_renyang@126.com',
     birthDay:new Date()
     },function(err,ret){
     if(err)
     console.error(err);
     else
     console.log(ret);
     //models.collections.users.find({username:'1234'},console.log);
     // findOne
    // models.collections.users.findOrCreate({username:'1234'},console.log);
     })
  //models.collections.users.findOrCreate({username:'12345',
  //    password:'1234',
  //    email:'zhang_renyang@126.com',
  //    birthDay:new Date()},console.log);
  //models.collections.users.update({username:'12345'},{username:'5555'},console.log);
  //models.collections.users.destroy({username:'5555'},console.log);
  //models.collections.users.find({where:{username:'1234'},skip:2,limit:2},console.log);
})