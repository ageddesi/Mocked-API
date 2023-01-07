import { faker } from '@faker-js/faker';
import { Weather, WeatherType } from '../consts/Weather';

export const classifyTemperature = (temperatureC: number): WeatherType => {
    // temperature classified arbitrarily
    if (temperatureC <= 0) {
        return 'Freezing';
    } else if (temperatureC <= 5) {
        return 'Bracing';
    } else if (temperatureC <= 10) {
        return 'Chilly';
    } else if (temperatureC <= 15) {
        return 'Cool';
    } else if (temperatureC <= 20) {
        return 'Balmy';
    } else if (temperatureC <= 25) {
        return 'Mild';
    } else if (temperatureC <= 30) {
        return 'Sweltering';
    } else if (temperatureC <= 35) {
        return 'Warm';
    } else if (temperatureC <= 40) {
        return 'Hot';
    } else {
        return 'Scorching';
    }
};

const toFahrenheit = (temperatureC: number) => Number((temperatureC * (9 / 5) + 32).toFixed(1));

// temperature in Celsius from https://en.wikipedia.org/wiki/Earth
const randomCelsius = () => faker.datatype.float({ min: -89.2, max: 56.7, precision: 0.1 });

export const getWeather = (): Weather => {
    const date = new Date();
    const temperatureC = randomCelsius();
    const temperatureF = toFahrenheit(temperatureC);
    const summary = classifyTemperature(temperatureC);

    return {
        date,
        temperatureC,
        temperatureF,
        summary,
    };
};
