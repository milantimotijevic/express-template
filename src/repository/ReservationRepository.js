const uuid = require('uuid');
const { client } = require('./connection');

const getOneReservation = function getOneReservation(id) {
	return client.hget('reservations', id);
};

const getAllReservations = function getAllReservations() {
	return client.hgetall('reservations');
};

const createReservation = function createReservation(reservationParam) {
	return client.hset('reservations', uuid.v4(), JSON.stringify(reservationParam));
};

const updateReservation = async function updateReservation(id, reservation) {
	return client.hset('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function deleteReservation(id) {
	return client.hdel('reservations', id);
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
