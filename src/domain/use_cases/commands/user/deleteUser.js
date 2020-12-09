const { UserRepository } = require('../../../../repository');

module.exports = function deleteUser(id){
  return UserRepository.deleteUser(id);
};
