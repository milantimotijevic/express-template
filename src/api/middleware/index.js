const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

const isProdEnv = process.env.NODE_ENV === 'production';
const prodMiddleware = [compression(), helmet()];
const middleware = [
  ...(isProdEnv ? prodMiddleware : []),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
  morgan('dev'),
];

module.exports = {
  middleware,
  errorHandler,
};
