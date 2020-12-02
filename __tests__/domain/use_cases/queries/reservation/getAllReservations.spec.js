const getAllReservations = require('../../../../../src/domain/use_cases/queries/reservation/getAllReservations');
const ReservationRepository = require('../../../../../src/repository/ReservationRepository');

jest.mock('sequelize');
jest.mock('../../../../../src/repository/ReservationRepository');

describe('getAllReservations tests', () => {
	test('getAllReservations returns a list of reservations', async () => {
		const mocked = {
			guestName: 'Milan',
			hotelName: 'Some Hotel',
		};

		ReservationRepository.getAllReservations.mockResolvedValue(mocked);
		const result = await getAllReservations();

		expect(result).toMatchObject(mocked);
	});
});
