var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dbconnect:dbconnect@ds117158.mlab.com:17158/todo' ||'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
