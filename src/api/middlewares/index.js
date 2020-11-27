const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

const isProdEnv = process.env.NODE_ENV === 'production';
const prodMiddlewares = [compression(), helmet()];
const middlewares = [
  ...(isProdEnv ? prodMiddlewares : []),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
  morgan('dev'),
];

module.exports = {
  middlewares,
  errorHandler,
};
