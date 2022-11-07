import request from 'supertest';
import app from '../../../../../app';

describe('text api endpoints', () => {
    describe('GET /text/line', () => {
        it('should return a response', async () => {
            const response = await request(app).get('/text/line');

            expect(response.body.lenth).toBe(1);
        })
    })
})