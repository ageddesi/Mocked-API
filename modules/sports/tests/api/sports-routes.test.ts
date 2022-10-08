import request from 'supertest';
import app from '../../../../app';

describe('sports api endpoints', () => {
    describe('GET /sports/football/leagues/premier/teams', () => {
        it('should return a list of teams', async () => {
            const response = await request(app).get(`/sports/football/leagues/premier/teams`);

            expect(response).not.toBeFalsy();
        });
    });
});
