const { ReservationRepository } = require('../../../../repository');

module.exports = function createReservation(reservation){
	return ReservationRepository.createReservation(reservation);
};
