import request = require('supertest');
const baseURL = 'http://localhost:3000';

// emails-routes.ts tests
describe('emails api endpoints', () => {
    describe('GET /emails', () => {
        it('should return a list of emails', async () => {
            const response = await request(baseURL).get(`/emails`);

            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('from');
            expect(response.body[0]).toHaveProperty('subject');
            expect(response.body[0]).toHaveProperty('body');
            expect(response.body[0]).toHaveProperty('read');
            expect(response.body[0]).toHaveProperty('tags');
            expect(response.body[0]).toHaveProperty('date');
        });
    });
});
