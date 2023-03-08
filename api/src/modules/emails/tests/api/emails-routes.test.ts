import request from 'supertest';
import app from '../../../../../app';
// emails-routes.ts tests
describe('emails api endpoints', () => {
    describe('GET /emails', () => {
        it('should return a list of emails', async () => {
            const response = await request(app).get(`/emails`).expect(200).expect('Content-Type', /json/);

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
