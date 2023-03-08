import { faker } from '@faker-js/faker';
import { celsiusToFahrenheit, randomCelsius, randomRating } from '../numbers';

jest.mock('@faker-js/faker', () => ({
    faker: {
        datatype: {
            float: jest.fn().mockReturnValue(10),
        },
    },
}));

describe('numbers utils', () => {
    describe('get random rating', () => {
        it('should return a rating between 1 and 5', () => {
            const res = randomRating();

            expect(res).toBeGreaterThanOrEqual(1);
            expect(res).toBeLessThanOrEqual(5);
        });
    });

    describe('get random celsius', () => {
        const celsius = randomCelsius();

        expect(celsius).toBe(10);
        expect(faker.datatype.float).toBeCalledWith({ min: -89.2, max: 56.7, precision: 0.1 });
    });

    describe('convert celsius to fahrenheit', () => {
        const result = celsiusToFahrenheit(10);

        expect(result).toBe(50);
    });
});
