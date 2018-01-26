var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;
mongoose.connect("mongodb://" + username + ":" + password + "@ds117158.mlab.com:17158/todo" ||'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
