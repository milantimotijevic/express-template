const models = require('../models');

const getAllReservations = async() => {
    return models.Reservation.findAll();
};

const getOneReservation = async(id) => {
    return models.Reservation.findByPk(id);
};

const createReservation = async(reservation) => {
    return models.Reservation.create(reservation);
};

const deleteReservation = async(id) => {
    return models.Reservation.destroy(id);
};

const updateReservation = async(id, reservation) => {
    return models.Reservation.update(id, reservation);
};

module.exports = {
    getAllReservations,
    getOneReservation,
    createReservation,
    deleteReservation,
    updateReservation
};