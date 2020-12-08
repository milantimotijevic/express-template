const { UserRepository } = require('../../../../repository');

module.exports = function updateUser(id, user){
  return UserRepository.updateUser(id, user);
};
