var myexpress = require('./6.middleware');
var app = myexpress();
var path = require('path');
var http = require('http');
//����
app.use('/mny',function(req,res,next){///�Ƿ�Ҫ����������һ���м��
    res.mny = 100;
    next();
});
//ʡһ��
app.use('/mny',function(req,res,next){///�Ƿ�Ҫ����������һ���м��
    res.mny = res.mny-20;
    next();
});
//����һ��
app.use('/mny',function(req,res,next){///�Ƿ�Ҫ����������һ���м��
    res.mny = res.mny-50;
    //res.reason = 'money lost';
    next('money lost');
});
//��
app.use('/mny',function(req,res,next){///�Ƿ�Ҫ����������һ���м��
    res.mny = res.mny-20;
    console.log('����');
    //res.end('no money');
    next();
});
//ũ��
app.use('/mny',function(req,res,next){///�Ƿ�Ҫ����������һ���м��
    res.end('aaaa  '+res.mny);//���յõ��Ĳ���
});

http.createServer(app).listen(8080);