import request from 'supertest';
const baseURL = 'http://localhost:3000';

describe('sports api endpoints', () => {
    describe('GET /sports/football/leagues/premier/teams', () => {
        it('should return a list of teams', async () => {
            const response = await request(baseURL).get(`/sports/football/leagues/premier/teams`);

            expect(response).not.toBeFalsy();
        });
    });

    describe('GET /sports/football/leagues/laliga/teams', () => {
        it('should return a list of la liga teams', async () => {
            const qty = 20;
            const response = await request(baseURL).get(`/sports/football/leagues/laliga/teams/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });
});
