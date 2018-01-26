const {ObjectID } = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 // Todo.remove({}).then((result)=>{console.log(result)});
 // Todo.findOneAndRemove('').then((todo)=>{console.log(todo)});
Todo.findByIdAndRemove('5a6b8fc2562c6527fb8fa298').then((todo)=>{console.log(todo)});
