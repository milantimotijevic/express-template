const { ReservationRepository } = require('../../../../repository');

module.exports = function deleteReservation(id){
  return ReservationRepository.deleteReservation(id);
};
