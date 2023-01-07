import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getWeather } from '../utils/getWeather';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/weather/':
     *   get:
     *     tags:
     *     - Weather
     *     summary: Obtain a random weather
     *     responses:
     *       '200':
     *         description: Obtain an object representing random data about weather
     *         schema:
     *           $ref: '#/definitions/MockWeather'
     */
    app.get('/weather', (req: Request, res: Response) => {
        res.json(getWeather());
    });
};
