const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

module.exports = (roles) => {
	return (req, res, next) => {
		const { token } = req.headers;

		if (!token) {
			throw Boom.unauthorized('You must log in');
		}

		let tokenData;
		try {
			tokenData = jwt.verify(token, process.env.SECRET);
		} catch (err) {
			throw Boom.unauthorized('Bad login info');
		}

		console.log(roles)
		console.log(tokenData)
		if (roles && !roles.includes(tokenData.role)) {
			throw Boom.unauthorized('You may not access this resource');
		}

		next();
	};
};
