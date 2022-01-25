const path = require('path');
const HealthcheckController = require('./HealthcheckController');
const StaticController = require('./StaticController');
const ReservationController = require('./ReservationController');
const healthcheckValidations = require('../validations/healthcheck');
const reservationValidations = require('../validations/reservation');

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
];
