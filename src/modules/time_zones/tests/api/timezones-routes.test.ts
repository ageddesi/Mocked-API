import request from 'supertest';
import app from '../../../../../app';


describe('GET /time-zones/', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/time-zones');
    const timeZone = response.body[0];

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(timeZone).toHaveProperty('value');
    expect(timeZone).toHaveProperty('abbr');
    expect(timeZone).toHaveProperty('offset');
    expect(timeZone).toHaveProperty('isdst');
    expect(timeZone).toHaveProperty('text');
    expect(timeZone).toHaveProperty('utc');
  });
});

describe('GET /time-zones/random', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/time-zones/random');
    const timeZone = response.body;

    expect(response.status).toBe(200);
    expect(timeZone).toHaveProperty('value');
    expect(timeZone).toHaveProperty('abbr');
    expect(timeZone).toHaveProperty('offset');
    expect(timeZone).toHaveProperty('isdst');
    expect(timeZone).toHaveProperty('text');
    expect(timeZone).toHaveProperty('utc');
  });
});
