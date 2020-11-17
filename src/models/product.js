module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define('Product', {
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
