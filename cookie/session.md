#session 
 为了解决敏感数据问题，session,要数据保存到服务器端，
 客户端无法保存。也不需要在每次请求时传递。
 #实现原理
 ##基于cookie
 第一次访问的时候，服务器端生成sessionId,放在客户端的cookie里
 