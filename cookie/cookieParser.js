exports.serialize=function(name,val,opt){
 opt = opt || {};
    var pairs=[name+'='+val];
    if(opt.maxAge){
        pairs.push("Max-Age="+opt.maxAge);
    }
    if(opt.domain);
    if(opt.path);
    if(opt.expires);
    if(opt.httpOnly);
    if(opt.secure);
    return pairs.join(';');
}