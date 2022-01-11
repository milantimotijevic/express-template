const { ReservationRepository } = require('../repository');

const getAllReservations = async() => {
    return ReservationRepository.getAllReservations();
};

const getOneReservation = async(id) => {
    return ReservationRepository.getOneReservation(id);
};

const createReservation = async(reservation) => {
    return ReservationRepository.createReservation(reservation);
};

const deleteReservation = async(id) => {
    return ReservationRepository.deleteReservation(id);
};

const updateReservation = async(id, reservation) => {
    return ReservationRepository.updateReservation(id, reservation);
};

module.exports = {
    getAllReservations,
    getOneReservation,
    createReservation,
    deleteReservation,
    updateReservation
};