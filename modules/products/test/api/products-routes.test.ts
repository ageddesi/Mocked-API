import request from 'supertest';
const baseURL = 'http://localhost:3000';

describe('products api endpoints', () => {
    describe('GET /products/reviews', () => {
        it('should return a user', async () => {
            const response = await request(baseURL).get(`/products/reviews`);

            expect(response.body[0]).toHaveProperty('productName');
            expect(response.body[0]).toHaveProperty('productId');
            expect(response.body[0]).toHaveProperty('message');
            expect(response.body[0]).toHaveProperty('dateTime');
            expect(response.body[0]).toHaveProperty('rating');
            expect(response.body[0]).toHaveProperty('userName');
            expect(response.body[0]).toHaveProperty('categories');
        });
    });

    describe('GET /products/reviews/rating/:rating', () => {
        const rating = 2;

        it('should return a list of users ', async () => {
            const response = await request(baseURL).get(`/products/reviews/rating/${rating}`);
            expect(response.body[0].rating).toBeLessThanOrEqual(rating);
        });
    });
});
