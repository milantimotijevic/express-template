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
const jwt = require('jsonwebtoken');
module.exports = {
  User: {
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
    login: async () => {

      const token = jwt.sign({
        id: 'some-id',
        email: 'john@doe.com',
        firstName: 'john',
        lastName: 'doe',
        role: 'admin',
      }, 'somesecret', { expiresIn: '10m' });

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
