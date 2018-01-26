var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var username = 'dbconnect';
var password = 'dbconnect';
mongoose.connect("mongodb://" + username + ":" + password + "@ds117158.mlab.com:17158/todo" ||'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
