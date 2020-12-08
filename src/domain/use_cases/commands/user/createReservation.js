const { UserRepository } = require('../../../../repository');

module.exports = function createUser(user){
	return UserRepository.createUser(user);
};
