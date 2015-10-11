var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://123.57.143.189/today',function(err,db){
    console.log('connected to server');
   // db.collection('person').insertOne({name:'zfpx222'},function(err,db){
   //     console.log(ret);
   // })
  //  db.collection('person').count(function(err,count){
  //      console.log(count);
  //      db.collection('person').find({}).skip(5).limit(5).sort({name:1}).toArray(function(err,set){
  //          console.log(set);
  //      })
  //  })

})