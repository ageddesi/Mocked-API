import { faker } from '@faker-js/faker';

const randomRating = (): number => {
    return Math.floor(Math.random() * 5) + 1;
};

/**
 * Returns a celsius temperature between min and max registered earth temperature
 * @returns random celsius
 */
// temperature in Celsius from https://en.wikipedia.org/wiki/Earth
const randomCelsius = () => faker.datatype.float({ min: -89.2, max: 56.7, precision: 0.1 });

const celsiusToFahrenheit = (temperatureC: number) => temperatureC * (9 / 5) + 32;

export { randomRating, randomCelsius, celsiusToFahrenheit };
