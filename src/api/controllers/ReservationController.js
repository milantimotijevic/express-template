const { createValidator } = require('express-joi-validation');
const BaseController = require('./BaseController');
const { ReservationService } = require('../../service');

const validator = createValidator({});

module.exports = class ReservationController extends BaseController {
	constructor({ validations }) {
		super(validations);
	}

	initRoutes(validations) {
		this.router.get(
			'/reservation',
			this.getAllReservations,
		);

		this.router.get(
			'/reservation/:id',
			validator.params(validations.reservationIdParam),
			this.getOneReservation,
		);

		this.router.post(
			'/reservation',
			validator.body(validations.createReservationSchema),
			this.createReservation,
		);

		this.router.put(
			'/reservation/:id',
			validator.params(validations.reservationIdParam),
			validator.body(validations.updateReservationSchema),
			this.updateReservation,
		);

		this.router.delete(
			'/reservation/:id',
			validator.params(validations.reservationIdParam),
			this.deleteReservation,
		);
	}

	async getAllReservations(req, res, next) {
		try {
			const result = await ReservationService.getAllReservations();
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async getOneReservation(req, res, next) {
		try {
			const { id } = req.params;
			const result = await ReservationService.getOneReservation(id);
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async createReservation(req, res, next) {
		try {
			const result = await ReservationService.createReservation(req.body);
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async updateReservation(req, res, next) {
		try {
			const { id } = req.params;
			const result = await ReservationService.updateReservation(id, req.body);
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async deleteReservation(req, res, next) {
		try {
			const { id } = req.params;
			const result = await ReservationService.deleteReservation(id);
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}
};
