import countriesList from '../data/countries';
import provincesList from '../data/provinces';

import request from 'supertest';
import app from '../../../../app';

describe('country api endpoints', () => {
    describe('GET /countries/', () => {
        it('should return a list of countries', async () => {
            const response = await request(app).get(`/countries/`);
            expect(response.body).toStrictEqual({ countries: [...countriesList] });
        });
    });

    describe('GET /countries/provinces/', () => {
        it('should return a list of countries with their provinces', async () => {
            const response = await request(app).get(`/countries/provinces/`);
            expect(response.body).toStrictEqual({ countries: [...provincesList] });
        });
    });

    describe('GET /countries/:filterBy?', () => {
        it('should return gpb_usd ticker data', async () => {
            const filter = 'Afghanistan';
            const response = await request(app).get(`/countries/${filter}`);
            expect(response.body.countries[0].name).toEqual(filter);
        });
    });
});
