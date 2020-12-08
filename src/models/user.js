module.exports = (sequelize, Sequelize) => {
	const model = sequelize.define('User', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
		},
		firstName: Sequelize.DATE,
		lastName: Sequelize.DATE,

	}, {
		timestamps: false,
		tableName: 'users',
	});

	return model;
};
