import app from '../../../../../app';
import resolutions from '../../consts/videoResolutions';
let request = require('supertest');

// /video/ test
describe('GET /video/', () => {
    it('should return random video data', async () => {
        const response = await request(app).get('/video/');
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(typeof body.title).toBe('string');
        expect(typeof body.description).toBe('string');
        expect(body.date).toBeDefined();
        expect(typeof body.author).toBe('string');
        expect(typeof body.views).toBe('number');
        expect(body.views).toBeDefined();
        expect(typeof body.description).toBe('string');
        expect(typeof body.likes).toBe('number');
        expect(body.likes).toBeDefined();
        expect(typeof body.description).toBe('string');
        expect(typeof body.dislikes).toBe('number');
        expect(resolutions).toContain(body.maxQuality);
    });
});

// /video/:qty/ test
describe('GET /video/:qty', () => {
    it('should return array of length specified of random video data', async () => {
        const response = await request(app).get('/video/10');
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body.length).toBe(10);
    });
});
