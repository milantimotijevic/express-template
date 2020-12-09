const { UserRepository } = require('../../../../repository');
const crypto = require('crypto');
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

module.exports = async function login(userParam){
	const { email, password } = userParam;
	const user = await UserRepository.findUser({ email: email });
	if (!user) {
		throw Boom.unauthorized('Incorrect email or password');
	}

	const encrypted = crypto.pbkdf2Sync(password, user.salt, 10000, 50, 'sha512')
		.toString('hex');

	if (user.password !== encrypted) {
		throw Boom.unauthorized('Incorrect email or password');
	}

	const token = jwt.sign({
		id: user.id,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
	}, process.env.SECRET, { expiresIn: '10m' });

	return {
		token,
	};
};
