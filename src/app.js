const express = require('express');
const expressOasGenerator = require('express-oas-generator');

const isDevEnv = process.env.NODE_ENV === 'development';

class App {
  constructor({ middlewares, controllers, errorHandler }) {
    this.instance = express();
    this.useMiddlewares(middlewares);
    this.useControllers(controllers);
    this.useMiddlewares(errorHandler);
    if (isDevEnv) expressOasGenerator.init(this.instance, {});
  }

  useMiddlewares(middlewares) {
    this.instance.use(middlewares);
  }

  useControllers(controllers) {
    this.instance.use(controllers.map((controller) => controller.router));
  }
}

module.exports = App;
