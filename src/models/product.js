module.exports = (connection, Sequelize) => {
  const model = connection.define('Product', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,

  }, {
    timestamps: false,
    tableName: 'products',
  });

  return model;
};
