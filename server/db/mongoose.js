var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_6cz96bd9:isc4bqm3j3j01kjf8em9o8mjr6@ds117148.mlab.com:17148/heroku_6cz96bd9' ||'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};
