const uuid = require('uuid');

const Redis = require('ioredis');

const { REDIS_URL } = process.env;

let client;

if (REDIS_URL) {
	const nodes = [{
		host: REDIS_URL,
		port: '6379',
	}];

	const options = {
		redisOptions: {
			tls: {
				checkServerIdentity: (/* servername, cert */) => undefined
				,
			},
		},
	};

	client = new Redis.Cluster(nodes, options);
} else {
	client = new Redis(6379, 'redis_local_dev');
}

const getOneReservation = function (id) {
	return client.hget('reservations', id);
};

const getAllReservations = function () {
	return client.hgetall('reservations');
};

const createReservation = function (reservationParam) {
	return client.hset('reservations', uuid.v4(), JSON.stringify(reservationParam));
};

const updateReservation = async function (id, reservation) {
	return client.hset('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function (id) {
	return client.hdel('reservations', id);
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
