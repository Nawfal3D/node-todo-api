// const { MongoClient, ObjectID } = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
if (err)  {
            return  console.log('Unable to connect to mongodb server');
          }
            const db = client.db('TodoApp')
                    console.log('connected to mongodb server');

  // db.collection('Todos').find({_id:new ObjectID('5a5392cb2169642c3ff67ca3')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });


  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  //
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('Users').find({name:'Noor Fadhel'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

  }, (err)=>{
    console.log('Unable to fetch todos', err);
  });


//client.close();
});
