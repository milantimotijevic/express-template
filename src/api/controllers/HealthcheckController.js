/* eslint-disable no-trailing-spaces */
const { createValidator } = require('express-joi-validation');
const BaseController = require('./BaseController');
const { HealthCheckService } = require('../../service');

const validator = createValidator({});

module.exports = class HealthcheckController extends BaseController {
	constructor({ validations }) {
		super(validations);
	}

	initRoutes(validations) {
		this.router.get(
			'/health',
			validator.query(validations.healthcheckQuery),
			this.getHealthcheck,
		);
	}

	async getHealthcheck(req, res, next) {
		try {
			const healthcheck = await HealthCheckService.getHealthCheck();
			next();
			return res.json(healthcheck);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}
};
