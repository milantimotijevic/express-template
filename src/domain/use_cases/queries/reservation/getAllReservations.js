const { ReservationRepository } = require('../../../../repository');

module.exports = function getAllReservations(){
	return ReservationRepository.getAllReservations();
};
