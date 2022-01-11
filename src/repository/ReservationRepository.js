const uuid = require('uuid');
const Boom = require('@hapi/boom');

const { createClient } = require('redis');
const { REDIS_PORT, REDIS_HOST } = process.env;

let client;
(async () => {
  client = createClient(REDIS_PORT, REDIS_HOST);

  client.on('error', (err) => console.log('Redis Client Error', err));
})();

const getOneReservation = function(id) {
	return {};
};

const getAllReservations = function() {
	return [];
};

const createReservation = function(reservationParam) {
	return {};
};

const updateReservation = async function(id, reservation) {
  return {};
};

const deleteReservation = function(id) {
  return {};
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
