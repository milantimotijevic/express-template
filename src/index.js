require('dotenv/config');
const App = require('./app');
const controllers = require('./api/controllers');
const { middlewares, errorHandler } = require('./api/middlewares');
require('../src/models');

const PORT = process.env.PORT || 3000;
const app = new App({
  middlewares,
  controllers,
  errorHandler,
}).instance;

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});
