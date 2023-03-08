import request from 'supertest';
import app from '../../../../../app';

describe('news api endpoints', () => {
    describe('GET /news', () => {
        it('should return a list of a news of 20', async () => {
            const qty = 20;
            const response = await request(app).get(`/news/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /news/slug', () => {
        it('should return a list of news', async () => {
            const slug = 'The-Rise-and-Fall-of-Bitcoin-Maximalism';
            const response = await request(app).get(`/news/slug/${slug}`);

            expect(response).not.toBeFalsy();
        });
    });

    describe('GET /news/slug', () => {
        it('should return an error status response', async () => {
            const slug = 'invalid-slug';
            const response = await request(app).get(`/news/slug/${slug}`);
            console.log(response.statusCode);

            expect(response.statusCode).toBeGreaterThanOrEqual(400);
        });
    });
});
