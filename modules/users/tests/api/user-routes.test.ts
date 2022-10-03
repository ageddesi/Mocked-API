const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('user api endpoints', () => {
  describe('GET /user', () => {
    it('should return a user', async () => {
      const response = await request(baseURL).get(`/users/`);

      expect(response.body[0]).toHaveProperty('avatarUrl');
      expect(response.body[0]).toHaveProperty('birthDate');
      expect(response.body[0]).toHaveProperty('email');
      expect(response.body[0]).toHaveProperty('password');
      expect(response.body[0]).toHaveProperty('registeredAt');
      expect(response.body[0]).toHaveProperty('userId');
      expect(response.body[0]).toHaveProperty('username');
    });
  });

  describe('GET /user/qty', () => {
    const qty = 5;

    it('should return a list of users ', async () => {
      const response = await request(baseURL).get(`/users/${qty}`);
      expect(response.body.length).toEqual(qty);
    });
  });
});
