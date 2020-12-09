const { createValidator } = require('express-joi-validation');
const BaseController = require('./BaseController');
const getAllReservations = require('../../domain/use_cases/queries/reservation/getAllReservations');
const getOneReservation = require('../../domain/use_cases/queries/reservation/getOneReservation');
const createReservation = require('../../domain/use_cases/commands/reservation/createReservation');
const updateReservation = require('../../domain/use_cases/commands/reservation/updateReservation');
const deleteReservation = require('../../domain/use_cases/commands/reservation/deleteReservation');
const auth = require('../middlewares/auth');

const validator = createValidator({});

module.exports = class ReservationController extends BaseController {
  constructor({ validations }) {
    super(validations);
  }

  initRoutes(validations) {
    this.router.get(
      '/reservation',
      auth(['admin']),
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
      const result = await getAllReservations();

      return res.json(result);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }

  async getOneReservation(req, res, next) {
    try {
      const { id } = req.params;
      const result = await getOneReservation(id);

      return res.json(result);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }

  async createReservation(req, res, next) {
    try {
      const result = await createReservation(req.body);

      return res.json(result);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }

  async updateReservation(req, res, next) {
    try {
      const { id } = req.params;
      const result = await updateReservation(id, req.body);

      return res.json(result);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }

  async deleteReservation(req, res, next) {
    try {
      const { id } = req.params;
      const result = await deleteReservation(id);

      return res.json(result);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }
};
