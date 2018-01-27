var env = process.env.NODE_ENV || 'development';

if (env ==='development'){
  process.env.PORT = 3016;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env ==='test') {
  process.env.PORT = 3018;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
