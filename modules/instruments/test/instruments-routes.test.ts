import instrumentsList from '../data/instruments';

import request from 'supertest';
import app from '../../../app';

describe('instrument api endpoints', () => {
    describe('GET /instruments/', () => {
        it('should return a list of instruments', async () => {
            const response = await request(app).get(`/instruments/`);
            expect(response.body).toStrictEqual({ instruments: [...instrumentsList] });
        });
    });

    describe('GET /instruments/:filterBy?', () => {
        it('should return instrument data', async () => {
            const filter = 'Roman tuba';
            const response = await request(app).get(`/instruments/${filter}`);
            expect(response.body.instruments[0]).toEqual(filter);
        });
    });
});
