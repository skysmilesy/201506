var myexpress = require('./6.middleware');
var app = myexpress();
var path = require('path');
var http = require('http');
//中央
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = 100;
    next();
});
//省一级
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-20;
    next();
});
//市里一级
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-50;
    //res.reason = 'money lost';
    next('money lost');
});
//村
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-20;
    console.log('村里');
    //res.end('no money');
    next();
});
//农民
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.end('aaaa  '+res.mny);//最终得到的补贴
});

http.createServer(app).listen(8080);