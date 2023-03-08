import app from '../../../../../app';
let request = require('supertest');

describe('courses api endpoints', () => {
    describe('GET /courses', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/courses/`);

            const course = response.body[0];

            expect(course).toHaveProperty('name');
            expect(course).toHaveProperty('description');
            expect(course).toHaveProperty('provider');
            expect(course).toHaveProperty('url');
            expect(course).toHaveProperty('type');
            expect(course).toHaveProperty('address');
            expect(course).toHaveProperty('price');
        });
    });

    describe('GET /courses/qty', () => {
        const qty = 2;

        it('should return courses with the given quantity of courses', async () => {
            const response = await request(app).get(`/courses/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});
