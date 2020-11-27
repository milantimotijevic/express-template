const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

const isProdEnv = process.env.NODE_ENV === 'production';
const prodMiddlewares = [compression(), helmet()];

const whitelist = ['http://hetzner-test:3001']
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

const middlewares = [
  ...(isProdEnv ? prodMiddlewares : []),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(corsOptions),
  morgan('dev'),
];

module.exports = {
  middlewares,
  errorHandler,
};
