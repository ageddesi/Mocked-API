import app from '../../../../../app';
let request = require('supertest');

// Test case: for random coordinates is returned check
describe('random coordinates api endpoints', () => {
    describe('GET /location/co-ordinates/random/:qty', () => {
        it('should return a one random coordinates', async () => {
            const qty = 1;
            const response = await request(app).get(`/location/co-ordinates/random/${qty}`);
            const coordinates = response.body[0];
            expect(coordinates).toHaveProperty('latitude');
            expect(coordinates).toHaveProperty('longitude');
            expect(response.body.length).toStrictEqual(qty);
        });
    });
});

// Test case: for One random coordinates in specified country is returned check
describe('coordinates for country code', () => {
    describe('GET /location/co-ordinates/country/:code/:qty', () => {
        it('should return a one random coordinate in specified country', async () => {
            const code = 'US';
            const qty = 1;
            const response = await request(app).get(`/location/co-ordinates/country/${code}/${qty}`);
            const coordinates = response.body[0];
            expect(coordinates).toHaveProperty('latitude');
            expect(coordinates).toHaveProperty('longitude');
            expect(coordinates).toHaveProperty('country');
            expect(response.body.length).toStrictEqual(qty);
        });
    });
});
