import request from 'supertest';
import { Album } from '../consts/Album';
import { Music } from '../consts/Music';

import app from '../../../../app';

describe('music api endpoints', () => {
    describe('GET /music/:qty', () => {
        it('should return a list of musics', async () => {
            const qty = 10;
            const response = await request(app).get(`/music/${qty}`);
            const music: Music = response.body.data[0];

            expect(music).toHaveProperty('id');
            expect(music).toHaveProperty('genre');
            expect(music).toHaveProperty('song');
            expect(response.body.total).toEqual(qty);
        });
    });

    describe('GET /album/:qty', () => {
        it('should return a album', async () => {
            const qty = 10;
            const response = await request(app).get(`/album/${qty}`);
            const album: Album = response.body.data[0];

            expect(album).toHaveProperty('id');
            expect(album).toHaveProperty('name');
            expect(album).toHaveProperty('releaseDate');
            expect(album).toHaveProperty('price');
            expect(album).toHaveProperty('publisher');
            expect(album).toHaveProperty('songs');
        });
    });
});
