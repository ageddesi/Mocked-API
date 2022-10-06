import request from 'supertest';
const baseURL = 'http://localhost:3000';

describe('color api endpoints', () => {
 
  describe('GET /color/', () => {
    it('requesting null or falsy should return a list of 1 color', async () => {
      const qty = 1;
      const response = await request(baseURL).get(`/colors/`);
      expect(response.body.length).toBe(qty);
    });
    it('requesting 2 should return a list of 2 colors', async () => {
      const qty = 2;
      const response = await request(baseURL).get(`/colors/${qty}`);
      expect(response.body.length).toBe(qty);
    });
});

 
});
