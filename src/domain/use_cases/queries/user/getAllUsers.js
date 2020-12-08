const { UserRepository } = require('../../../../repository');

module.exports = function getAllUsers(){
	return UserRepository.getAllUsers();
};
