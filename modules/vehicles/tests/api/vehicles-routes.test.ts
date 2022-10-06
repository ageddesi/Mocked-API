const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('vehicles api endpoints', () => {
  describe('GET /vehicles', () => {
    it('should return a vehicle', async () => {
      const response = await request(baseURL).get(`/vehicles/`);

      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('type');
      expect(response.body[0]).toHaveProperty('color');
      expect(response.body[0]).toHaveProperty('fuel');
      expect(response.body[0]).toHaveProperty('manufacturer');
      expect(response.body[0]).toHaveProperty('model');
      expect(response.body[0]).toHaveProperty('vin');
      expect(response.body[0]).toHaveProperty('vrm');
    });
  });

  describe('GET /vehicles/qty', () => {
    const qty = 5;

    it('should return a list of users ', async () => {
      const response = await request(baseURL).get(`/users/${qty}`);
      expect(response.body.length).toEqual(qty);
    });
  });
});
