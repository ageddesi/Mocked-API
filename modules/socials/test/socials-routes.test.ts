import request from 'supertest';
import Twitter from '../consts/Twitter';
import Instagram from '../consts/Instagram';
import { DEFAULT_POSTS_COUNT } from '../consts/default';
import app from '../../../app';

describe('socials api endpoints', () => {
    describe('GET /socials/twitter/', () => {
        it('should returns a list of fake twitter posts', async () => {
            const response = await request(app).get(`/socials/twitter/`);
            const twitter: Twitter = response.body[0];

            expect(twitter).toHaveProperty('id');
            expect(twitter).toHaveProperty('handle');
            expect(twitter).toHaveProperty('message');
            expect(twitter).toHaveProperty('media');
            expect(twitter).toHaveProperty('likes');
            expect(twitter).toHaveProperty('comments');
            expect(twitter).toHaveProperty('retweets');
            expect(twitter).toHaveProperty('date');
            expect(response.body.length).toEqual(DEFAULT_POSTS_COUNT);
        });
    });

    describe('GET /socials/instagram/', () => {
        it('should returns a list of fake instagram posts', async () => {
            const response = await request(app).get(`/socials/instagram/`);
            const instagram: Instagram = response.body[0];

            expect(instagram).toHaveProperty('id');
            expect(instagram).toHaveProperty('commentCount');
            expect(instagram).toHaveProperty('likeCount');
            expect(instagram).toHaveProperty('imageUrl');
            expect(instagram).toHaveProperty('createdAt');
            expect(instagram).toHaveProperty('caption');
            expect(instagram).toHaveProperty('width');
            expect(instagram).toHaveProperty('height');
            expect(instagram).toHaveProperty('accessibilityCaption');
            expect(instagram).toHaveProperty('user.id');
            expect(instagram).toHaveProperty('user.username');
            expect(instagram).toHaveProperty('user.fullName');
            expect(instagram).toHaveProperty('user.profilePicture');
            expect(instagram).toHaveProperty('user.isVerified');
            expect(instagram).toHaveProperty('location.name');
            expect(instagram).toHaveProperty('location.lng');
            expect(instagram).toHaveProperty('location.lat');
            expect(instagram).toHaveProperty('comments');
            expect(instagram).toHaveProperty('likes');
            expect(response.body.length).toEqual(DEFAULT_POSTS_COUNT);
        });
    });
});
