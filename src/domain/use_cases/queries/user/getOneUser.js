const { UserRepository } = require('../../../../repository');

module.exports = function getOneUser(id){
	return UserRepository.getOneUser(id);
};
