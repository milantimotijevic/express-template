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
			'/v1/reservation',
			this.getAllReservationsV1,
		);

		this.router.get(
			'/v1/reservation/:id',
			validator.params(validations.reservationIdParam),
			this.getOneReservationV1,
		);

		this.router.post(
			'/v1/reservation',
			validator.body(validations.createReservationSchema),
			this.createReservationV1,
		);

		this.router.put(
			'/v1/reservation/:id',
			validator.params(validations.reservationIdParam),
			validator.body(validations.updateReservationSchema),
			this.updateReservationV1,
		);

		this.router.delete(
			'/v1/reservation/:id',
			validator.params(validations.reservationIdParam),
			this.deleteReservationV1,
		);
	}

	async getAllReservationsV1(req, res, next) {
		try {
			const result = await ReservationService.getAllReservations();
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async getOneReservationV1(req, res, next) {
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

	async createReservationV1(req, res, next) {
		try {
			const result = await ReservationService.createReservation(req.body);
			next();
			return res.json(result);
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}

	async updateReservationV1(req, res, next) {
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

	async deleteReservationV1(req, res, next) {
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
