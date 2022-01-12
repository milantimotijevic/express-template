const uuid = require('uuid');
const Boom = require('@hapi/boom');

const { createClient } = require('redis');
const { REDIS_PORT, REDIS_HOST } = process.env;

let client;
(async () => {
  client = createClient(REDIS_PORT, REDIS_HOST);
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
})();

const getOneReservation = function(id) {
	return client.hGet('reservations', id);
};

const getAllReservations = function() {
	return client.hGetAll('reservations');
};

const createReservation = function(reservationParam) {
	return client.hSet('reservations', uuid.v4(), JSON.stringify(reservationParam));
};

const updateReservation = async function(id, reservation) {
  	return client.hSet('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function(id) {
  return client.hDel('reservations', id);
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
