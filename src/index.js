require('dotenv/config');
const App = require('./app');
const controllers = require('./api/controllers');
const { middlewares, errorHandler } = require('./api/middlewares');
const cors = require('cors');
require('../src/models');

const PORT = process.env.PORT || 3000;
app.use(cors());
const app = new App({
  middlewares,
  controllers,
  errorHandler,
}).instance;

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});
