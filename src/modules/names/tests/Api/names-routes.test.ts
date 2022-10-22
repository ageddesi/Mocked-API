import request from 'supertest';
import app from '../../../../../app';

//These routes dont seem to provide consistent responses

describe('name routes endpoints', () => {
    describe('male', () => {
        it('GET /names/fullnames/male/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/male/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/middlenames/male/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/middlenames/male/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/surnames/male/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/surnames/male/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/fullnames/male/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/male/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('female', () => {
        it('GET /names/fullnames/female/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/female/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/middlenames/female/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/middlenames/female/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/surnames/female/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/surnames/female/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/fullnames/female/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/female/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('no gender given', () => {
        it('GET /names/fullnames/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/middlenames/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/middlenames/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/surnames/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/surnames/${qty}`);

            expect(response.body.length).toBe(qty);
        });

        it('GET /names/fullnames/:qty?', async () => {
            const qty = 5;
            const response = await request(app).get(`/names/fullnames/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });
});
