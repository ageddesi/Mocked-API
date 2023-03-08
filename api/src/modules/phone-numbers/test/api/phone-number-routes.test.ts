import request from 'supertest';
import app from '../../../../../app';

// Test case: for One phone number is returned check
describe('phonenumber api endpoints', () => {
    describe('GET /phonenumbers/', () => {
        it('should return a one random country phonenumbers', async () => {
            const qty = 1;

            const response = await request(app).get('/phonenumbers/');
            expect([response.body].length).toStrictEqual(qty);
        });
    });
});

// Test case: for One phone number imei is returned check
describe('phonenumber imei endpoints', () => {
    describe('GET /phonenumbers/imei', () => {
        it('should return a one random imei', async () => {
            const qty = 1;
            const response = await request(app).get('/phonenumbers/imei');
            expect([response.body].length).toStrictEqual(qty);
        });
    });
});

// Test case: for One phone number with format: space is returned check

describe('phonenumber with country code & format endpoints', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'US';
            const format = 'space';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect([response.body].length).toStrictEqual(qty);
        });
    });
});

// Test case: for One phone number with format: nospace is returned check
describe('phonenumber with country code & format endpoints', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'GB';
            const format = 'nospace';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect([response.body].length).toStrictEqual(qty);
        });
    });
});

// Test case: for One phone number with format: dash is returned check
describe('phonenumber with country code & format endpoints', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'US';
            const format = 'dash';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect([response.body].length).toStrictEqual(qty);
        });
    });
});

//Test case: US and format space regex
describe('phonenumber with country code as US & format space', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'US';
            const format = 'space';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect(/^[+](1\s?)?(\d{3}|\(\d{3}\))[\s]?\d{3}[\s]?\d{4}$/.test(response.body));
        });
    });
});

//Test case: US and format dash regex
describe('phonenumber with country code as US & format space', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'US';
            const format = 'dash';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect(/^[+](1\-?)?(\d{3}|\(\d{3}\))[\-]?\d{3}[\-]?\d{4}$/.test(response.body));
        });
    });
});

//Test case: US and format no space regex
describe('phonenumber with country code as US & format space', () => {
    describe('GET /phonenumbers/country/:cc/:format?', () => {
        it('should return a one random imei', async () => {
            const countrycode = 'US';
            const format = 'dash';
            const qty = 1;
            const response = await request(app).get(`/phonenumbers/country/${countrycode}/${format}`);
            expect(/^[+](1?)?(\d{3}|\(\d{3}\))?\d{3}?\d{4}$/.test(response.body));
        });
    });
});
