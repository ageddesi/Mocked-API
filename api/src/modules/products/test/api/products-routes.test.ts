import request from 'supertest';
import app from '../../../../../app';

describe('products api endpoints', () => {
    describe('GET /products/reviews', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/products/reviews`);

            expect(response.body[0]).toHaveProperty('productName');
            expect(response.body[0]).toHaveProperty('productId');
            expect(response.body[0]).toHaveProperty('message');
            expect(response.body[0]).toHaveProperty('dateTime');
            expect(response.body[0]).toHaveProperty('rating');
            expect(response.body[0]).toHaveProperty('userName');
            expect(response.body[0]).toHaveProperty('categories');
        });
    });

    describe('GET /products/reviews/ratings/:rating', () => {
        const rating = 2;

        it('should return a list of reviews ', async () => {
            const response = await request(app).get(`/products/reviews/ratings/${rating}`);
            expect(response.body[0].rating).toEqual(rating);
            expect(response.body[0]).toHaveProperty('productName');
            expect(response.body[0]).toHaveProperty('productId');
            expect(response.body[0]).toHaveProperty('message');
            expect(response.body[0]).toHaveProperty('dateTime');
            expect(response.body[0]).toHaveProperty('rating');
            expect(response.body[0]).toHaveProperty('userName');
            expect(response.body[0]).toHaveProperty('categories');
        });
    });

    describe('GET /products/:qty/:department', () => {
        const quantity = 4;
        const department = 'Computer';

        it('should return a list of products ', async () => {
            const response = await request(app).get(`/products/${quantity}/${department}`);
            expect(response.body.length).toEqual(quantity);
            expect(response.body[0].department).toEqual(department);
            expect(response.body[0]).toHaveProperty('department');
            expect(response.body[0]).toHaveProperty('type');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('adjective');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('material');
            expect(response.body[0]).toHaveProperty('sku');
        });
    });

    describe('GET /products/quantity/:qty', () => {
        const quantity = 4;

        it('should return a list of products', async () => {
            const response = await request(app).get(`/products/${quantity}`);
            expect(response.body.length).toEqual(quantity);
        });
    });

    describe('GET /products/department/:qty', () => {
        const department = 'Computer';

        it('should return a list of products', async () => {
            const response = await request(app).get(`/products/department/${department}`);
            expect(response.body[0].department).toEqual(department);
        });
    });

    describe('GET /product', () => {
        it('should return a random product ', async () => {
            const response = await request(app).get(`/product`);
            expect(response.body.length).toEqual(1);
            expect(response.body[0]).toHaveProperty('department');
            expect(response.body[0]).toHaveProperty('type');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('adjective');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('material');
            expect(response.body[0]).toHaveProperty('sku');
        });
    });
});
