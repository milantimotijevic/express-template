/*
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const connection = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
const fs = require('fs');
const path = require('path');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    require(path.join(__dirname, file))(connection, Sequelize);
  });

  connection.sync();

module.exports = connection.models;
*/

// PLACEHOLDER STUFF BELOW

module.exports = {
  User: {
    findByPk: async () => {
      return { id: 'some-id', name: 'placeholder-findByPk' };
    },
    findOne: async () => {
      return {
        id: 'da3d51cd-0416-49e7-b20e-e5c9f37d58e2',
        password: 'b695e85bcbb20bbad4491494d486873be46a3e74e7754ca428667294b287e973f10335e0f67fd573f087be3e933882f81cf8',
        email: 'john@doe.com',
        firstName: 'john',
        lastName: 'doe',
        role: 'admin',
        salt: '66863605b95dccfc7359be83d927cb65ea72069a370b000a43e804d72d8b3baf'
      };
    },
    findAll: async () => {
      return [{ id: 'some-id', name: 'placeholder-findAll' }];
    },
    create: async () => {
      return { 
        firstName:'john',
		    lastName: 'doe',
		    email: 'john@doe.com',
		    role: 'admin',
       };
    },
    update: async () => {
      return [1, [{
        id: 'some-id',
        name: 'placeholder-update'
      }]]
    },
    destroy: async () => {
      return { count: 1 };
    },
    login: async () => {

      const token = jwt.sign({
        id: 'some-id',
        email: 'john@doe.com',
        firstName: 'john',
        lastName: 'doe',
        role: 'admin',
      }, process.env.SECRET, { expiresIn: '10m' });

      return {
        token,
      };
    },
  },
  Reservation: {
    findByPk: async () => {
      return { id: 'some-id', name: 'placeholder-findByPk' };
    },
    findOne: async () => {
      return { id: 'some-id', name: 'placeholder-findOne' };
    },
    findAll: async () => {
      return [{ id: 'some-id', name: 'placeholder-findAll' }];
    },
    create: async () => {
      return { id: 'some-id', name: 'placeholder-create' };
    },
    update: async () => {
      return [1, [{
        id: 'some-id',
        name: 'placeholder-update'
      }]]
    },
    destroy: async () => {
      return { count: 1 };
    },
  }
};
