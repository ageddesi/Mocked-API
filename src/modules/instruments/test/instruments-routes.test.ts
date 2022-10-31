import instrumentsList from '../data/instruments';

import request from 'supertest';
import app from '../../../../app';

describe('instrument api endpoints', () => {
    describe('GET /instruments/:qty?', () => {
        it('should return a list of instruments', async () => {
            const response = await request(app).get(`/instruments/1`);
            expect(response.body).toStrictEqual({ instruments: ['Accordion'] });
        });
    });

    describe('GET /instruments/:filterBy?/:qty?', () => {
        it('should return instrument data', async () => {
            const filter = 'Roman tuba';
            const response = await request(app).get(`/instruments/${filter}/1`);
            expect(response.body.instruments[0]).toEqual(filter);
        });
    });
});
