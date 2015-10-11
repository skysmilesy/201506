module.exports = {
    add:function(req,res,name,pasword){
        res.end('user add '+name+' '+pasword);
    },
    delete:function(req,res,id){
        res.end(' delete user'+id);
    },
    update:function(req,res,id){
        res.end(' update user'+id);
    }
}