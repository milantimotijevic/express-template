const express = require('express');

module.exports = class BaseController {
	constructor(...args) {
		this.router = express.Router();
		this.initRoutes(...args);
	}

	use(middleware) {
		this.router.use(middleware);
	}
};
