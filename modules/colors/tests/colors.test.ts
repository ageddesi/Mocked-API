import request from 'supertest';
const baseURL = 'http://localhost:3000';

describe('color api endpoints', () => {
 
  describe('GET /color/', () => {
    it('requesting with no qty returns a list of 1 color', async () => {
      const qty = 1;
      const response = await request(baseURL).get(`/colors/`);
      expect(response.body.length).toBe(qty);
    });
    it('requesting with non-numerical qty returns a list of 100 color', async () => {
      // I think this is potentially a bug - we probably should be retuning 1 colour, or throwing an error.
      const qty = 100;
      debugger;
      const response = await request(baseURL).get(`/colors/foo`);
      expect(response.body.length).toBe(qty);
    });
    it('requesting with quantity of 2 should return a list of 2 colors', async () => {
      const qty = 2;
      const response = await request(baseURL).get(`/colors/${qty}`);
      expect(response.body.length).toBe(qty);
    });
    it('requesting with quantity of 200 should return a list of 100 colors', async () => {
      const qty = 200;
      const response = await request(baseURL).get(`/colors/${qty}`);
      expect(response.body.length).toBe(100);
    });

});

 
});
