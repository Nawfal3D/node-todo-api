var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var username = 'dbconnect';
var password = 'dbconnect';
mongoose.connect("mongodb://" + username + ":" + password + "@ds117148.mlab.com:17148/heroku_6cz96bd9" ||'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
