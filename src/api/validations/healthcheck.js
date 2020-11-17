const Joi = require('@hapi/joi');

const healthcheckQuery = Joi.object({
  id: Joi.number().optional(),
});

module.exports = {
  healthcheckQuery,
};
