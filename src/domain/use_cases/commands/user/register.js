const { UserRepository } = require('../../../../repository');
const crypto = require('crypto');

module.exports = async function register(userParam){
	const { password } = userParam;
	const salt = crypto.randomBytes(32).toString('hex');
	const encrypted = crypto.pbkdf2Sync(password, salt, 10000, 50, 'sha512')
		.toString('hex');
	const user = await UserRepository.createUser({
		firstName: userParam.firstName,
		lastName: userParam.lastName,
		salt,
		password: encrypted,
		email: userParam.email,
		role: userParam.role,
	});

	return {
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		role: user.role,
	}
};
