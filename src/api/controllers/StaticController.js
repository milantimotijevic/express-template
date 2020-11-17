/* eslint-disable class-methods-use-this */
const express = require('express');
const BaseController = require('./BaseController');

module.exports = class StaticController extends BaseController {
  constructor({ staticPath }) {
    super(staticPath);
  }

  initRoutes(staticPath) {
    this.use(express.static(staticPath));
  }
};
