import request from 'supertest';
import app from '../../../../../app';

describe('GET /time-zones/', () => {
    it('should return a list of timezones', async () => {
        const response = await request(app).get('/time-zones');

        expect(response).not.toBeFalsy();
        expect(response.status).toBe(200);
        expect(response.body as Array<TimeZone>).toBeTruthy();

        const timeZone = response.body[0];
        expect(timeZone).toMatchObject<TimeZone>;
    });
});

describe('GET /time-zones/random', () => {
    it('should return a random timezone', async () => {
        const response = await request(app).get('/time-zones/random');

        expect(response).not.toBeFalsy();
        expect(response.status).toBe(200);

        const timeZone = response.body;
        expect(timeZone).toMatchObject<TimeZone>;
    });
});
