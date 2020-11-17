const { ReservationRepository } = require('../../../../repository');

module.exports = function getOneReservation(id){
	return ReservationRepository.getOneReservation(id);
};
