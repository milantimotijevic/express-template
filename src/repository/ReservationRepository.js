const uuid = require('uuid');
const Boom = require('@hapi/boom');

const Redis = require('ioredis');
const { REDIS_URL } = process.env;

// the second 's' stands for 'initiate TLS mode'
// const client = new Redis(`rediss://${REDIS_URL}`);

const nodes = [{
    host: REDIS_URL,
    port: '6379',
}];

const options = {
    redisOptions: {
        tls: {
            checkServerIdentity: (servername, cert) => {
                // skip certificate hostname validation
                return undefined;
            },
        }
    }
}

const client = new Redis.Cluster(nodes, options);

const getOneReservation = function(id) {
	return client.hget('reservations', id);
};

const getAllReservations = function() {
	return client.hgetall('reservations');
};

const createReservation = function(reservationParam) {
	return client.hset('reservations', uuid.v4(), JSON.stringify(reservationParam));
};

const updateReservation = async function(id, reservation) {
  	return client.hset('reservations', id, JSON.stringify(reservation));
};

const deleteReservation = function(id) {
  return client.hdel('reservations', id);
};

module.exports = {
	getOneReservation,
	getAllReservations,
	createReservation,
	updateReservation,
	deleteReservation,
};
