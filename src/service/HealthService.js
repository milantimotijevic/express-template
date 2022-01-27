const getHealthCheck = async function getHealthCheck() {
	return {
		server: 'up',
	};
};

module.exports = {
	getHealthCheck,
};
