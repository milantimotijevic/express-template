const uuid = require('uuid');
const Boom = require('@hapi/boom');

const Redis = require('ioredis');
const { REDIS_URL } = process.env;

const client = new Redis(`rediss://${REDIS_URL}`);

const getOneReservation = function(id) {
	return client.hget('reservations', id);
};

const getAllReservations = function() {
	return client.hgetall('reservations');
};

const createReservation = function(reservationParam) {
	return client.hset('reservations', uuid.v4(), JSON.stringify(reservationParam));
};

const updateReservation = async function(id, reservation) {
  	return client.hset('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function(id) {
  return client.hdel('reservations', id);
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
