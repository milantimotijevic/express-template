const Redis = require('ioredis');

const { REDIS_URL } = process.env;

let client;

if (REDIS_URL) {
	const nodes = [{
		host: REDIS_URL,
		port: 6379,
	}];

	const options = {
		redisOptions: {
			tls: {
				checkServerIdentity: (/* servername, cert */) => undefined,
			},
		},
	};

	client = new Redis.Cluster(nodes, options);
} else {
	client = new Redis(6379, 'redis_local_dev');
}

module.exports = {
	client,
};
