const { ReservationRepository } = require('../repository');

const getAllReservations = async () => ReservationRepository.getAllReservations();

const getOneReservation = async (id) => ReservationRepository.getOneReservation(id);

const createReservation = async (reservation) => ReservationRepository.createReservation(reservation);

const deleteReservation = async (id) => ReservationRepository.deleteReservation(id);

const updateReservation = async (id, reservation) => ReservationRepository.updateReservation(id, reservation);

module.exports = {
	getAllReservations,
	getOneReservation,
	createReservation,
	deleteReservation,
	updateReservation,
};
