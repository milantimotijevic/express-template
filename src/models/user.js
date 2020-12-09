module.exports = (sequelize, Sequelize) => {
	const model = sequelize.define('User', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
		},
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		email: {
			type: Sequelize.STRING,
			unique: true,
		},
		salt: Sequelize.STRING,
		password: Sequelize.STRING,
	}, {
		timestamps: false,
		tableName: 'users',
	});

	return model;
};
