import request from 'supertest';

const baseURL = 'http://localhost:3000';

describe('GET /timezones/', () => {
  it('should return 200 OK', async () => {
    const response = await request(baseURL).get('/time-zones');
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

describe('GET /timezones/random', () => {
  it('should return 200 OK', async () => {
    const response = await request(baseURL).get('/time-zones/random');
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