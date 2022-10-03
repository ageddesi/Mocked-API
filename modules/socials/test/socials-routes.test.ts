import request from 'supertest';
import Twitter from '../consts/Twitter';

const baseURL = 'http://localhost:3000';

describe('twitter api endpoints', () => {
    describe('GET /socials/twitter/', () => {
        it('should returns a list of fake twitter posts', async () => {
            const response = await request(baseURL).get(`/socials/twitter/`);
            const twitter: Twitter = response.body[0];

            expect(twitter).toHaveProperty('id');
            expect(twitter).toHaveProperty('handle');
            expect(twitter).toHaveProperty('message');
            expect(twitter).toHaveProperty('media');
            expect(twitter).toHaveProperty('likes');
            expect(twitter).toHaveProperty('comments');
            expect(twitter).toHaveProperty('retweets');
            expect(twitter).toHaveProperty('date');
        });
    });
});
