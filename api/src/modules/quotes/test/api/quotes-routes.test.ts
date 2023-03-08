import request from 'supertest';
import app from '../../../../../app';

describe('quotes api endpoints', () => {
    describe('GET /quotes/:qty', () => {
        it('should the correct number of quotes', async () => {
            const qty = 5;
            const response = await request(app).get(`/quotes/${qty}`).expect(200).expect('Content-Type', /json/);

            expect(response.body).toBeInstanceOf(Array);
            expect(response.body.length).toBe(qty);
            expect(response.body[0]).toHaveProperty('quote');
            expect(response.body[0]).toHaveProperty('author');
        });
    });

    describe('GET /quotes/random', () => {
        it('should return a random quote', async () => {
            const response = await request(app).get('/quotes/random').expect(200).expect('Content-Type', /json/);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toHaveProperty('quote');
            expect(response.body).toHaveProperty('author');
        });
    });
});
