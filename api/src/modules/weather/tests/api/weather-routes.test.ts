const request = require('supertest');
import app from '../../../../../app';

describe('weathers api endpoints', () => {
    describe('GET /weathers/{qty}', () => {
        it('should return a list of weathers', async () => {
            const qty = 11;

            const response = await request(app).get(`/weathers/${qty}`);
            const { body } = response;

            expect(body.length).toBe(qty);
        });
    });
});
