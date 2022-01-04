module.exports = (connection, Sequelize) => {
	const model = connection.define('User', {
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
		role: Sequelize.STRING,
	}, {
		timestamps: false,
		tableName: 'users',
	});

	return model;
};
