import { classifyTemperature, getRandomWeathers } from '../../utils/getRandomWeathers';

describe('get random weather', () => {
    it('should return a random weather', () => {
        const weather = getRandomWeathers(1)[0];

        expect(weather.summary).toBeDefined();
        expect(weather.temperatureC).toBeDefined();
        expect(weather.temperatureF).toBeDefined();
        expect(weather.date).toBeDefined();
    });

    it('should return a list of weathers', () => {
        const qty = 11;

        const weathers = getRandomWeathers(qty);

        expect(weathers.length).toBe(qty);
    });

    describe('classify temperature', () => {
        it('should classify temperature', () => {
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
