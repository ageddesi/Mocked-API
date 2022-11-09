import request from 'supertest';
import app from '../../../../app';
const facts = require('../data/chuckfacts.json');
import chuckNorrisErrors from '../consts/chuck-norris-errors';
describe('Chuck Norris api endpoints', () => {
    describe('GET /chuck-norris/fact/:category/:qty?', () => {
        it('Calling the endpoint with no qty returns 1', async () => {
            const response = await request(app).get(`/chuck-norris/fact/dev`);
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
        });
        it('Calling the endpoint with category all and no qty returns 1', async () => {
            const response = await request(app).get(`/chuck-norris/fact/all`);
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
        });

        it('Calling the endpoint with valid category but negative qty throws 400', async () => {
            const response = await request(app).get(`/chuck-norris/fact/dev/-1`);
            expect(response.status).toBe(400);
            expect(response.body.error).toBe(chuckNorrisErrors.InvalidQuantityMessage);
        });

        it('Calling the endpoint with invalid category throws 400', async () => {
            const response = await request(app).get(`/chuck-norris/fact/wimp`);
            expect(response.status).toBe(400);
            expect(response.body.error).toBe(chuckNorrisErrors.InvalidCategoryMessage);
        });
    });

    describe('GET /chuck-norris/categories', () => {
        it('Call the categories returns a list containing all the categories.', async () => {
            //Arrange
            const expectedCategories = await facts
                .map((item) => item.categories[0])
                .filter((value, index, self) => self.indexOf(value) === index);

            //Act
            const response = await request(app).get(`/chuck-norris/categories`);

            //Assert
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(expectedCategories.length);
            expect(response.body).toEqual(expect.arrayContaining(expectedCategories));
        });
    });
});
