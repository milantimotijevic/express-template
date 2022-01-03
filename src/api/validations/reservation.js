const Joi = require('joi');

const reservationIdParam = Joi.object({
  id: Joi.string().guid().required(),
});

const createReservationSchema = Joi.object().keys({
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  hotelName: Joi.string().required(),
  guestName: Joi.string().required(),
}).label('CreateReservationSchema');


const updateReservationSchema = Joi.object().keys({
  startDate: Joi.string().optional(),
  endDate: Joi.string().optional(),
  hotelName: Joi.string().optional(),
  guestName: Joi.string().optional(),
}).label('UpdateReservationSchema');

module.exports = {
  reservationIdParam,
  createReservationSchema,
  updateReservationSchema,
};
