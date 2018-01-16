// const { MongoClient, ObjectID } = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
if (err)  {
            return  console.log('Unable to connect to mongodb server');
          }
            const db = client.db('TodoApp')
                    console.log('connected to mongodb server');

// deleteMany
// db.collection('Todos').deleteMany({"text" : "walk the dog"}).then((result)=>{console.log(result)});
// deleteOne
// db.collection('Todos').deleteOne({"text" : "walk the dog"}).then((result)=>{console.log(result)});
// findOneAndDelete
// db.collection('Todos').findOneAndDelete({"text" : "walk the dog"}).then((result)=>{console.log(result)});

// db.collection('Users').deleteMany({"name" : "Nawfal Fadhel"}).then((result)=>{console.log(result)});

db.collection('Users').findOneAndDelete({_id:new ObjectID("5a4fc73ec077d959ca137a1a")}).then((result)=>{console.log(result)});

//client.close();
});
