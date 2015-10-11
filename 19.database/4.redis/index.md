#redis
开源，C语言编写，支持网络，也支持内存，也可以持久化
key value数据库，
-支持多种语言
内存数据库，
多种数据类型 String ,hash,list,set,zset

string 
hash ,适合存放对象
list
存放有序的字符链表
适合存放一些新鲜的消息
推荐 lpush key value 向链表左端添加元素，返回链表长度
rpush key value
lpop  向左端删除元素，返回删除元素
rpop  向右端删除元素，返回删除元素

lrange key start stop 获取链表的

set
集合中的元素是唯一的
适合存放标签 集合中元素是唯一的。


zset
集合中的元素是唯一的，但每个元素关联一个分数

hset key field value 设置key的