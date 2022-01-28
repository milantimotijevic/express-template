const { client } = require('./connection');

const getReservationsByIds = async function getReservationsByIds(ids) {
	let result = [];
	if (ids.length < 1) {
		const objResult = await client.hgetall('reservations');
		const keys = Object.keys(objResult);
		keys.forEach((key) => {
			result.push(JSON.parse(objResult[key]));
		});
	} else {
		result = await client.hmget('reservations', ids);
		result = result.map((item) => JSON.parse(item));
	}
	
	return result;
};

const getIdsByHotelName = function getIdsByHotelName(hotelName) {
	return client.smembers(`hotel:${hotelName}`);
};

const addIdByHotelName = function addIdByHotelName(hotelName, reservationId) {
	return client.sadd(`hotel:${hotelName}`, reservationId);
};

const createReservation = function createReservation(id, reservationParam) {
	return client.hset('reservations', id, JSON.stringify(reservationParam));
};

const updateReservation = async function updateReservation(id, reservation) {
	return client.hset('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function deleteReservation(id) {
	return client.hdel('reservations', id);
};

module.exports = {
	getReservationsByIds,
	getIdsByHotelName,
	addIdByHotelName,
	createReservation,
	updateReservation,
	deleteReservation,
};
