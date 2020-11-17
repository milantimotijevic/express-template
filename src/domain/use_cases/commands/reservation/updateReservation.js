const { ReservationRepository } = require('../../../../repository');

module.exports = function updateReservation(id, reservation){
  return ReservationRepository.updateReservation(id, reservation);
};
