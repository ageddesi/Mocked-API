import { celsiusToFahrenheit, randomCelsius } from '../../../utils/numbers';
import { Weather, WeatherType } from '../consts/Weather';

export const classifyTemperature = (temperatureC: number): WeatherType => {
    // temperature classified arbitrarily
    if (temperatureC <= 0) return 'Freezing';
    if (temperatureC <= 5) return 'Bracing';
    if (temperatureC <= 10) return 'Chilly';
    if (temperatureC <= 15) return 'Cool';
    if (temperatureC <= 20) return 'Balmy';
    if (temperatureC <= 25) return 'Mild';
    if (temperatureC <= 30) return 'Sweltering';
    if (temperatureC <= 35) return 'Warm';
    if (temperatureC <= 40) return 'Hot';
    return 'Scorching';
};

export const getRandomWeathers = (qty: number): Weather[] => {
    const weathers: Weather[] = [];

    for (let i = 0; i < qty; i++) {
        const date = new Date();
        const temperatureC = randomCelsius();
        const temperatureF = celsiusToFahrenheit(temperatureC);
        const summary = classifyTemperature(temperatureC);

        weathers.push({
            date,
            temperatureC,
            temperatureF,
            summary,
        });
    }

    return weathers;
};
