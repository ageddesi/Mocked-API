import request from 'supertest';

const baseURL = 'http://localhost:3000';

describe('ip api endpoints', () => {
       describe('GET /ip/:qty', () => {
        it('should return a list of ip address', async () => {
            const qty = 5;

            const response = await request(baseURL).get(`/ip/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });

describe('GET /mac/:qty', () => {
        it('should return a list of mac address', async () => {
            const qty = 5;

            const response = await request(baseURL).get(`/mac/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });

});
