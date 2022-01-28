const uuid = require('uuid');
const Boom = require('@hapi/boom');
const Logger = require('../util/Logger');
const { ReservationRepository } = require('../repository');

const getAllReservations = async (hotelName) => {
	const ids = await ReservationRepository.getIdsByHotelName(hotelName);
	if (ids.length < 1) {
		throw new Boom.notFound('Hotel name not registered');
	}
	return ReservationRepository.getReservationsByIds(ids);
};

const getReservationsByIds = async (ids) => {
	const result = await ReservationRepository.getReservationsByIds(ids);
	return JSON.parse(result);
};

const createReservation = async (reservation) => {
	const id = uuid.v4();
	
	const createResult = await ReservationRepository.createReservation(id, reservation);
	if (createResult < 1) {
		throw new Boom.badData('Error creating reservation');
	}

	const addResult = await ReservationRepository.addIdByHotelName(reservation.hotelName, id);
	if (addResult < 1) {
		Logger.error(`Unable to add id for hotel ${reservation.hotelName}, rolling back reservation creation...`);
		await ReservationRepository.deleteReservation(id);
		throw new Boom.badImplementation('Error creating reservation');
	}

	return createResult;
};

const updateReservation = async (id, reservation) => ReservationRepository.updateReservation(id, reservation);

module.exports = {
	getAllReservations,
	getReservationsByIds,
	createReservation,
	updateReservation,
};
