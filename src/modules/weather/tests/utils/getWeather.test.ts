import { faker } from '@faker-js/faker';
import { classifyTemperature, getWeather } from '../../utils/getWeather';

jest.mock('@faker-js/faker', () => ({
    faker: {
        datatype: {
            float: jest.fn().mockReturnValue(10),
        },
    },
}));

describe('get random weather', () => {
    it('should return a random weather', () => {
        const weather = getWeather();

        expect(weather.summary).toBe('Chilly');
        expect(weather.temperatureC).toBe(10); // mocked return value
        expect(weather.temperatureF).toBe(50);
        expect(faker.datatype.float).toBeCalledTimes(1);
        expect(faker.datatype.float).toBeCalledWith({ min: -89.2, max: 56.7, precision: 0.1 });
    });

    describe('classify temperature', () => {
        it('should be Freezing', () => {
            // inputs with temperature and your classification
            const tempMap: [number, string][] = [
                [0, 'Freezing'],
                [5, 'Bracing'],
                [10, 'Chilly'],
                [15, 'Cool'],
                [20, 'Balmy'],
                [25, 'Mild'],
                [30, 'Sweltering'],
                [35, 'Warm'],
                [40, 'Hot'],
                [45, 'Scorching'],
            ];

            tempMap.forEach(([temperature, cls]) => {
                const result = classifyTemperature(temperature);
                expect(result).toBe(cls);
            });
        });
    });
});
