require('dotenv/config');
const App = require('./app');
const controllers = require('./api/controllers');
const { middleware, errorHandler } = require('./api/middleware');

const PORT = process.env.PORT || 3000;
const app = new App({
  middleware,
  controllers,
  errorHandler,
}).instance;

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});
