const Joi = require('joi');

const reservationIdParam = Joi.object({
	id: Joi.string().guid().required(),
});

const reservationHotelNameParam = Joi.object({
	hotelName: Joi.string().optional(),
});

const createReservationSchema = Joi.object().keys({
	hotelName: Joi.string().required(),
	guestName: Joi.string().required(),
}).label('CreateReservationSchema');

const updateReservationSchema = Joi.object().keys({
	guestName: Joi.string().required(),
}).label('UpdateReservationSchema');

module.exports = {
	reservationIdParam,
	reservationHotelNameParam,
	createReservationSchema,
	updateReservationSchema,
};
