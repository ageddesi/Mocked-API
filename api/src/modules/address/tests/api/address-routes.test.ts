import Address from '../../consts/Address';
import app from '../../../../../app';
let request = require('supertest');

// address-routes.ts tests
describe('GET /address/', () => {
    it('should return a random address', async () => {
        const response = await request(app).get('/address');

        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(1);
        expect(typeof body[0]).toBe('object');
    });
});

// address/:country
describe('GET /address/usa', () => {
    it('should return a random USA format address', async () => {
        const response = await request(app).get('/address/usa');

        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(1);
        expect(typeof body[0]).toBe('object');
        expect(body[0].postcode).toBe(null);
        expect(body[0].zipcode).toBeTruthy();
    });

    it('should return a random UK format address', async () => {
        const response = await request(app).get('/address/uk');

        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(1);
        expect(typeof body[0]).toBe('object');
        expect(body[0].postcode).toBeTruthy();
        expect(body[0].zipcode).toBe(null);
    });
});

// address/:country/:qty
describe('GET /address/:country/:qty', () => {
    it('should return given number of random USA format addresses', async () => {
        const response = await request(app).get('/address/usa/5');

        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(5);
        expect(typeof body[0]).toBe('object');
        expect(typeof body[1]).toBe('object');
        expect(typeof body[2]).toBe('object');
        expect(typeof body[3]).toBe('object');
        expect(typeof body[4]).toBe('object');
    });

    it('should return given number of random UK format addresses', async () => {
        const response = await request(app).get('/address/uk/5');

        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(5);
        expect(typeof body[0]).toBe('object');
        expect(typeof body[1]).toBe('object');
        expect(typeof body[2]).toBe('object');
        expect(typeof body[3]).toBe('object');
        expect(typeof body[4]).toBe('object');
    });
});
