import request from 'supertest';
import { Music } from '../consts/Music';

const baseURL = 'http://localhost:3000';

describe('music api endpoints', () => {
    describe('GET /music/:qty', () => {
        it('should return a list of musics', async () => {
            const qty = 10;
            const response = await request(baseURL).get(`/music/${qty}`);
            const music: Music = response.body.data[0];

            expect(music).toHaveProperty('id');
            expect(music).toHaveProperty('genre');
            expect(music).toHaveProperty('song');
            expect(music).toHaveProperty('song');
            expect(response.body.total).toEqual(qty);
        });
    });
});
