const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('sports api endpoints', () => {
  describe('GET /sports/football/leagues/premier/teams', () => {
    it('should return a list of teams', async () => {
      const response = await request(baseURL).get(`/sports/football/leagues/premier/teams`);

      expect(response).not.toBeFalsy();
    });
  });
});
