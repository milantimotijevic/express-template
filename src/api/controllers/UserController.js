const {createValidator} = require('express-joi-validation');
const BaseController = require('./BaseController');
const getAllUsers = require('../../domain/use_cases/queries/user/getAllUsers');
const getOneUser = require('../../domain/use_cases/queries/user/getOneUser');
const register = require('../../domain/use_cases/commands/user/register');
const login = require('../../domain/use_cases/commands/user/login');
const updateUser = require('../../domain/use_cases/commands/user/updateUser');
const deleteUser = require('../../domain/use_cases/commands/user/deleteUser');

const validator = createValidator({});

module.exports = class UserController extends BaseController {
	constructor({validations}) {
		super(validations);
	}

	initRoutes(validations) {
		this.router.get(
			'/user',
			this.getAllUsers,
		);

		this.router.get(
			'/user/:id',
			validator.params(validations.userIdParam),
			this.getOneUser,
		);

		this.router.post(
			'/register',
			validator.body(validations.registerSchema),
			this.register,
		);

		this.router.post(
			'/login',
			validator.body(validations.loginSchema),
			this.login,
		)

		this.router.put(
			'/user/:id',
			validator.params(validations.userIdParam),
			validator.body(validations.updateUserSchema),
			this.updateUser,
		);

		this.router.delete(
			'/user/:id',
			validator.params(validations.userIdParam),
			this.deleteUser,
		);
	}

	async getAllUsers(req, res, next) {
		try {
			const result = await getAllUsers();

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}

	async getOneUser(req, res, next) {
		try {
			const {id} = req.params;
			const result = await getOneUser(id);

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}

	async register(req, res, next) {
		try {
			const result = await register(req.body);

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}

	async login(req, res, next) {
		try {
			const result = await login(req.body);

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}

	async updateUser(req, res, next) {
		try {
			const {id} = req.params;
			const result = await updateUser(id, req.body);

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}

	async deleteUser(req, res, next) {
		try {
			const {id} = req.params;
			const result = await deleteUser(id);

			return res.json(result);
		} catch (error) {
			console.log(error)
			return next(error);
		}
	}
};
