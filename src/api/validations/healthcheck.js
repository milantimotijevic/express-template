const Joi = require('joi');

const healthcheckQuery = Joi.object({
  id: Joi.number().optional(),
});

module.exports = {
  healthcheckQuery,
};