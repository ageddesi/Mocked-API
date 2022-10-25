import app from "../../../app"
let request = require('supertest');

// address-routes.ts tests
describe('GET /address/', () => {
	it('should return a random address', async () => {
		jest.setTimeout(30000)
		const response = await request(app)
			.get('/address');

		const {status, body} = response;
		expect(status).toBe(200);
    })
})