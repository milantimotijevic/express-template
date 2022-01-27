const { isBoom } = require('@hapi/boom');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
	if (isBoom(err)) {
		return res.status(err.output.statusCode).send(err.output.payload.message);
	}

	return res.status(500).send('Internal server error');
}

module.exports = errorHandler;
