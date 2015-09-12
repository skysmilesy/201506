
//console.log(process);
process.argv.forEach(function(arg){
   // console.log(arg)
});
console.log(process.argv[2],process.argv[3]);
console.log(process.pid);
//process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(data){
    console.log(data);
});
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);