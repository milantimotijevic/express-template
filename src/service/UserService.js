const crypto = require('crypto');
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { UserRepository } = require('../repository');

const getAllUsers = async() => {
    return models.User.findAll();
};

const getOneUser = async(id) => {
    return models.User.findByPk(id);
};

const deleteUser = async(id) => {
    return models.User.destroy(id);
};

const login = async(userParam) => {
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
    console.log(user)
	const token = jwt.sign({
		id: user.id,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
		role: user.role,
	}, process.env.SECRET, { expiresIn: '10m' });

	return {
		token,
	};
};

const register = async(userParam) => {
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

const updateUser = async() => {};

module.exports = {
    getAllUsers,
    getOneUser,
    deleteUser,
    login,
    register,
    updateUser,
};