import request from 'supertest';
import app from '../../../../../app';
// const app = 'http://localhost:3000';

const testDefaultRoutes = (response: request.Response): void => {
    expect(response.body.messages.length).toBe(1000);
    expect(response.body.messages[0]).toHaveProperty('id');
    expect(response.body.messages[0]).toHaveProperty('createdAt');
    expect(response.body.messages[0]).toHaveProperty('message');
    expect(response.body.messages[0]).toHaveProperty('userId');
};

const testParametizedRoutes = (response: request.Response, userCount: number, messageCount: number): void => {
    const userSet = new Set();

    response.body.users.forEach((element) => {
        userSet.add(element.userId);
    });

    expect(response.body.messages.length).toBe(messageCount);
    expect(userSet.size).toBe(userCount);
};

describe.only('chat api endpoints', () => {
    describe('GET /chat/random', () => {
        it('should return a random chat snapshot with 1000 messages', async () => {
            const response = await request(app).get('/chat/random');
            testDefaultRoutes(response);
        });
    });

    describe('GET /chat/random/various', () => {
        it('should return a random chat snapshot with 1000 messages', async () => {
            const response = await request(app).get('/chat/random/various');
            testDefaultRoutes(response);
        });
    });

    describe('GET /chat/random/:userCount/:messageCount', () => {
        it('should return a chat with the correct message and user count', async () => {
            const userCount = 5;
            const messageCount = 100;
            const response = await request(app).get(`/chat/random/${userCount}/${messageCount}`);
            testParametizedRoutes(response, userCount, messageCount);
        });
    });

    describe('GET /chat/random/various/:userCount/:messageCount', () => {
        it('should return a chat with the correct message and user count', async () => {
            const userCount = 5;
            const messageCount = 100;
            const response = await request(app).get(`/chat/random/various/${userCount}/${messageCount}`);
            testParametizedRoutes(response, userCount, messageCount);
        });
    });
});
