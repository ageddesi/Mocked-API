import request from 'supertest';
import app from '../../../../../app';

// elements-routes.ts tests
describe('elements api endpoints', () => {
    describe('GET /elements', () => {
        it('should return a random element', async () => {
            const response = await request(app).get(`/elements`);

            expect(response.body).toHaveProperty('symbol');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('atomicNumber');
        });
    });

    // elements/:qty
    describe('GET /elements/:qty', () => {
        it('should return a list of random elements', async () => {
            const response = await request(app).get(`/elements/3`);

            expect(response.body).toBeInstanceOf(Array);
            expect(response.body.length).toBe(3);
            expect(response.body[0]).toHaveProperty('symbol');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('atomicNumber');
        });
    });
});
