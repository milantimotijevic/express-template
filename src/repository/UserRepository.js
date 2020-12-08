const uuid = require('uuid');
const models = require('../models');
const Boom = require('@hapi/boom');

const getOneUser = function(id) {
	return models.User.findByPk(id);
};

const getAllUsers = function() {
	return models.User.findAll();
};

const createUser = function(userParam) {
	return models.User.create({
		id: uuid.v4(),
		...userParam,
	});
};

const updateUser = async function(id, user) {
	const { id: currentId, ...params } = user;
	const result = await models.User.update(params, { where: { id }, returning: true });

	if (!result[0]) {
		throw Boom.notFound('User not found');
	}

	return result[1][0];
};

const deleteUser = function(id) {
	return models.User.destroy({ where : { id } });
};

module.exports = {
	getOneUser,
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
};
