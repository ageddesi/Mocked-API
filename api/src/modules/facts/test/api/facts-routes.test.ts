import request from 'supertest';
import app from '../../../../../app';

describe('facts api endpoints', () => {
    describe('GET /facts/:qty', () => {
        it('should the correct number of facts', async () => {
            const qty = 5;
            const response = await request(app).get(`/facts/${qty}`).expect(200).expect('Content-Type', /json/);

            expect(response.body).toBeInstanceOf(Array);
            expect(response.body.length).toBe(qty);
            expect(response.body[0]).toHaveProperty('fact');
            expect(response.body[0]).toHaveProperty('category');
        });
    });

    describe('GET /facts/random', () => {
        it('should return a random fact', async () => {
            const response = await request(app).get('/facts/random').expect(200).expect('Content-Type', /json/);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toHaveProperty('fact');
            expect(response.body).toHaveProperty('category');
        });
    });
});
