const Joi = require('joi');

const userIdParam = Joi.object({
	id: Joi.string().guid().required(),
});

const registerSchema = Joi.object().keys({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
	role: Joi.string().required(),
}).label('CreateUserSchema');

const loginSchema = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
});

const updateUserSchema = Joi.object().keys({
	firstName: Joi.string().optional(),
	lastName: Joi.string().optional(),
	email: Joi.string().email().optional(),
}).label('UpdateUserSchema');

module.exports = {
	userIdParam,
	registerSchema,
	loginSchema,
	updateUserSchema,
};
