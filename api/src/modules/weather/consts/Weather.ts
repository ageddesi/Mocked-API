/**
 * @openapi
 * definitions:
 *   MockWeatherType:
 *     type: string
 *     example: Cool
 *     enum:
 *       - Freezing
 *       - Bracing
 *       - Chilly
 *       - Cool
 *       - Balmy
 *       - Mild
 *       - Swelterin
 *       - Warm
 *       - Hot
 *       - Scorching
 */
export type WeatherType =
    | 'Freezing'
    | 'Bracing'
    | 'Chilly'
    | 'Cool'
    | 'Balmy'
    | 'Mild'
    | 'Sweltering'
    | 'Warm'
    | 'Hot'
    | 'Scorching';

/**
 * @openapi
 * definitions:
 *   MockWeather:
 *     type: object
 *     properties:
 *       date:
 *         type: string
 *         example: '2022-10-04T00:05:12.697Z'
 *       temperatureC:
 *         type: number
 *         example: 10
 *       temperatureF:
 *         type: number
 *         example: 50
 *       summary:
 *         $ref: '#/definitions/MockWeatherType'
 */
export type Weather = {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: WeatherType;
};
