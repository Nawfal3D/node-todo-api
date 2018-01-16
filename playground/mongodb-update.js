// const { MongoClient, ObjectID } = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
if (err)  {
            return  console.log('Unable to connect to mongodb server');
          }
            const db = client.db('TodoApp')
                    console.log('connected to mongodb server');

//db.collection('Todos').findOneAndUpdate({_id : new ObjectID("5a4fc5f7e1b1ae59bf7664b5")},{$set: {completed : true}},{returnOriginal:false}).then((result)=>{console.log(result)});

db.collection('Users').findOneAndUpdate({_id : new ObjectID("5a538e7705f5ca6575138ee5")},{$set: {"name" : "Nawfal Fadhel"}, $inc:{"age" : 1} },{returnOriginal:false}).then((result)=>{console.log(result)});

//client.close();
});
