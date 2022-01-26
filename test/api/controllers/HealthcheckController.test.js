/* eslint-disable no-undef */
const supertest = require('supertest');
const App = require('../../../src/app');
const controllers = require('../../../src/api/controllers');
const { middleware, errorHandler } = require('../../../src/api/middleware');
const { getHealthCheck } = require('../../../src/service/HealthService');

const app = new App({
	middleware,
	controllers,
	errorHandler,
}).instance;

const request = supertest(app);

jest.mock('../../../src/service/HealthService');
jest.mock('ioredis');

describe('Healthcheck API tests', () => {
	it('should return healthcheck', async () => {
		const healthcheck = { server: 'up' };
		getHealthCheck.mockResolvedValue(healthcheck);

		const response = await request.get('/health');

		expect(response.body).toMatchObject(healthcheck);
	});
});
