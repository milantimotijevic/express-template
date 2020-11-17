const uuid = require('uuid');
const models = require('../models');
const Boom = require('@hapi/boom');

const getOneReservation = function(id) {
	return models.Reservation.findByPk(id);
};

const getAllReservations = function() {
	return models.Reservation.findAll();
};

const createReservation = function(reservationParam) {
	return models.Reservation.create({
    id: uuid.v4(),
    ...reservationParam,
  });
};

const updateReservation = async function(id, reservation) {
  const { id: currentId, ...params } = reservation;
  const result = await models.Reservation.update(params, { where: { id }, returning: true });

  if (!result[0]) {
    throw Boom.notFound('Reservation not found');
  }

  return result[1][0];
};

const deleteReservation = function(id) {
  return models.Reservation.destroy({ where : { id } });
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
