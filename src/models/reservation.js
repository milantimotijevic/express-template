module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define('Reservation', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    hotelName: Sequelize.STRING,
    guestName: Sequelize.STRING,

  }, {
    timestamps: false,
    tableName: 'reservations',
  });

  return model;
};
