const express = require('express');
const expressOasGenerator = require('express-oas-generator');

const isNonProd = process.env.NODE_ENV !== 'production';

class App {
	constructor({ middleware, controllers, errorHandler }) {
		this.instance = express();
		this.useMiddleware(middleware);
		this.useControllers(controllers);
		this.useMiddleware(errorHandler);
		if (isNonProd) expressOasGenerator.init(this.instance, {});
	}

	useMiddleware(middleware) {
		this.instance.use(middleware);
	}

	useControllers(controllers) {
		this.instance.use(controllers.map((controller) => controller.router));
	}
}

module.exports = App;
