import request from 'supertest';
import app from '../../../../../app';

describe('sports api endpoints', () => {
    describe('GET /sports/basketball/leagues/nba/teams', () => {
        it('should return a list of teams', async () => {
            const response = await request(app).get(`/sports/basketball/leagues/nba/teams`);
            const defaultQuantity = 10;
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(defaultQuantity);
        });
    });
    describe('GET /sports/basketball/leagues/nba/teams/5', () => {
        it('should return a list of 5 teams', async () => {
            const response = await request(app).get(`/sports/basketball/leagues/nba/teams/5`);
            const quantity = 5;
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(quantity);
        });
    });

    describe('GET /sports/football/leagues/premier/teams', () => {
        it('should return a list of teams', async () => {
            const response = await request(app).get(`/sports/football/leagues/premier/teams`);

            expect(response).not.toBeFalsy();
        });
    });

    describe('GET /sports/football/leagues/laliga/teams', () => {
        it('should return a list of la liga teams', async () => {
            const qty = 20;
            const response = await request(app).get(`/sports/football/leagues/laliga/teams/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /sports/football/leagues/seriea/teams', () => {
        it('should return a list of serie A teams', async () => {
            const qty = 5;
            const response = await request(app).get(`/sports/football/leagues/seriea/teams/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /sports/football/leagues/ligue1/teams', () => {
        it('should return a list of ligue 1 teams', async () => {
            const qty = 5;
            const response = await request(app).get(`/sports/football/leagues/ligue1/teams/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('no quantity specified should return a list of 10 ligue 1 teams', async () => {
            const defaultNumber = 10;
            const response = await request(app).get(`/sports/football/leagues/ligue1/teams`);

            expect(response.body.length).toBe(defaultNumber);
        });
    });
});
