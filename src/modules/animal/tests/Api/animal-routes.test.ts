import request from 'supertest';
import app from '../../../../../app';

//These routes dont seem to provide consistent responses
// Its not consistent because the data is randomly generated. You will need to mock the data to get consistent responses.
describe.skip('animal api endpoints', () => {
    describe('/animals/bear/species/:qty?', () => {
        it('should return a list of bear species', async () => {
            const qty = 4;

            const response = await request(app)
                .get(`/animals/bear/species/${qty}`)
                .expect(200)
                .expect('Content-Type', /json/);

            expect(response.body.length).toEqual(qty);
        });
    });

    describe('/animals/bird/species/:qty?', () => {
        it('should return a list of bird species', async () => {
            const qty = 5;

            const response = await request(app)
                .get(`/animals/bird/species/${qty}`)
                .expect(200)
                .expect('Content-Type', /json/);
            console.log('response', response.body);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/cat/species/:qty?', () => {
        it('should return a list of cat species', async () => {
            const qty = 5;

            const response = await request(app)
                .get(`/animals/cat/species/${qty}`)
                .expect(200)
                .expect('Content-Type', /json/);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/cetecean/species/:qty?', () => {
        it('should return a list of cetecean species', async () => {
            const qty = 4;

            const response = await request(app)
                .get(`/animals/cetecean/species/${qty}`)
                .expect(200)
                .expect('Content-Type', /json/);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/cow/species/:qty?', () => {
        it('should return a list of cow species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/cow/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/crocodile/species/:qty?', () => {
        it('should return a list of crocodile species', async () => {
            const qty = 5;

            const response = await request(app)
                .get(`/animals/crocodile/species/${qty}`)
                .expect(200)
                .expect('Content-Type', /json/);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/dog/species/:qty?', () => {
        it('should return a list of dog species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/dog/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/fish/species/:qty?', () => {
        it('should return a list of fish species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/fish/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/horse/species/:qty?', () => {
        it('should return a list of horse species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/horse/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/insect/species/:qty?', () => {
        it('should return a list of insect species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/insect/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/lion/species/:qty?', () => {
        it('should return a list of lion species', async () => {
            const qty = 2;

            const response = await request(app).get(`/animals/lion/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/rabbit/species/:qty?', () => {
        it('should return a list of rabbit species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/rabbit/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/rodent/species/:qty?', () => {
        it('should return a list of rodent species', async () => {
            const qty = 5;

            const response = await request(app).get(`/animals/rodent/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });

    describe('/animals/snake/species/:qty?', () => {
        it('should return a list of snake species', async () => {
            const qty = 4;

            const response = await request(app).get(`/animals/snake/species/${qty}`);
            expect(response.body.length).toBe(qty);
        });
    });
});
