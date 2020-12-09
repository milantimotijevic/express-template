const path = require('path');
const HealthcheckController = require('./HealthcheckController');
const StaticController = require('./StaticController');
const ReservationController = require('./ReservationController');
const UserController = require('./UserController');
const healthcheckValidations = require('../validations/healthcheck');
const reservationValidations = require('../validations/reservation');
const userValidations = require('../validations/user');

module.exports = [
  new HealthcheckController({
    validations: healthcheckValidations,
  }),
  new StaticController({
    staticPath: path.join(__dirname, '../../../static'),
  }),
  new ReservationController({
    validations: reservationValidations,
  }),
  new UserController({
	validations: userValidations,
  })
];
