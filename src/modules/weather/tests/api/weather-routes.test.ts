const request = require('supertest');
import app from '../../../../../app';

describe('vehicles api endpoints', () => {
    describe('GET /weather', () => {
        it('should return a weather', async () => {
            const response = await request(app).get(`/weather/`);
            const { body } = response;

            expect(body).toHaveProperty('date');
            expect(body).toHaveProperty('temperatureC');
            expect(body).toHaveProperty('temperatureF');
            expect(body).toHaveProperty('summary');
        });
    });
});
