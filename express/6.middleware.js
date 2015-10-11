module.exports = MyExpress;
//������ʱ��ļ����ص�
function app(req,res){
    app.handle(req,res);
}

function MyExpress(){
    app.stack = [];//��������е��м��
    return app;
}
//����м�� path ƥ��·�� fn ��Ӧ���м������
app.use = function(path,fn){
    if(typeof path == 'function'){
        fn = path;
        path = '/';//������е�·����Ч
    }
    this.stack.push({path:path,handle:fn});
    console.log(this.stack);
}
//�����е��м��ȡ��������ִ��
app.handle = function(req,res){
    var index =0;
    var stack = this.stack;
    function next(){
        var layer = stack[index++];
        if(!layer){
            return;
        }
        var url = req.url ||'/';//�����·��
        var path = layer.path;//�õ����м����·��
        // url /a/b
        // layer /a
        if(url.indexOf(path)==0){//���·��ƥ�� ִ�д��м��
            layer.handle(req,res,next);
        }else{
            next();//�����ƥ�䣬ִ����һ���м��
        }
    }
    next();
}