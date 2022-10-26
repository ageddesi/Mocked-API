import request from 'supertest';
import app from '../../../../app';

describe('ip api endpoints', () => {
    describe('GET /ip/:qty', () => {
        it('should return a list of ip address', async () => {
            const qty = 5;

            const response = await request(app).get(`/ip/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });

    describe('GET /mac/:qty', () => {
        it('should return a list of mac address', async () => {
            const qty = 5;

            const response = await request(app).get(`/mac/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});
