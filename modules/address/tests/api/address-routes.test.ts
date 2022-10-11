import app from "../../../../app";
let request = require('supertest');

// address-routes.ts tests
describe('GET /address/', () => {
	it('should return a random address', async () => {

		const response = await request(app)
			.get('/address');
		
		const {status, body} = response;
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		expect(body.length).toBe(1);
		expect(typeof body[0]).toBe('string');
	})
})

// address/:country
describe('GET /address/:country', () => {
	it('should return a random USA format address', async () => {
		const response = await request(app)
			.get('/address/usa');

		const {status, body} = response;
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		expect(body.length).toBe(1);
		expect(typeof body[0]).toBe('string');
	})

	it('should return a random UK format address', async () => {
		const response = await request(app)
			.get('/address/uk');

		const {status, body} = response;
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		expect(body.length).toBe(1);
		expect(typeof body[0]).toBe('string');
	})
})

// address/:country/:qty
describe('GET /address/:country/:qty', () => {
	it('should return given number of random USA format addresses', async () => {
		const response = await request(app)
			.get('/address/usa/5');

		const {status, body} = response;
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		expect(body.length).toBe(5);
		expect(typeof body[0]).toBe('string');
		expect(typeof body[1]).toBe('string');
		expect(typeof body[2]).toBe('string');
		expect(typeof body[3]).toBe('string');
		expect(typeof body[4]).toBe('string');
	})

	it('should return given number of random UK format addresses', async () => {
		const response = await request(app)
			.get('/address/uk/5');

		const {status, body} = response;
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		expect(body.length).toBe(5);
		expect(typeof body[0]).toBe('string');
		expect(typeof body[1]).toBe('string');
		expect(typeof body[2]).toBe('string');
		expect(typeof body[3]).toBe('string');
		expect(typeof body[4]).toBe('string');
	})
})
