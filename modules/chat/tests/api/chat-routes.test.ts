const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('chat api endpoints', () => {
  describe('GET /chat/random', () => {
    it('should return a random chat snapshot with 1000 messages', async () => {
      const response = await request(baseURL).get(`/chat/random`);

      expect(response.body.length).toBe(1000);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('createdAt');
      expect(response.body[0]).toHaveProperty('message');
      expect(response.body[0]).toHaveProperty('userId');
    });
  });

  describe('GET /chat/random/:userCount/:messageCount', () => {
    it('should return a chat with the correct message and user count', async () => {
      const userCount = 5;
      const messageCount = 100;
      const response = await request(baseURL).get(`/chat/random/${userCount}/${messageCount}`);

      expect(response.body.length).toBe(messageCount);

      const userSet = new Set();

      response.body.forEach((element) => {
        userSet.add(element.userId);
      });

      expect(response.body.length).toBe(messageCount);
      expect(userSet.size).toBe(userCount);
    });
  });
});
