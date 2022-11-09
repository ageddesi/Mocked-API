import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import time_zones from '../data/time_zones';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/time-zones":
     *  get:
     *    tags:
     *      - TimeZones
     *    summary: Get all timezones
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          type: array
     *          items:
     *            $ref: '#/definitions/MockTimeZoneResponse'
     */
    // Get all time_zones
    app.get('/time-zones', (req: Request, res: Response) => {
        res.json(time_zones);
    });

    /**
     * @openapi
     * "/time-zones/random":
     *  get:
     *    tags:
     *      - TimeZones
     *    summary: Get a random timezone
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          $ref: '#/definitions/MockTimeZoneResponse'
     */
    // Get a random timezone
    app.get('/time-zones/random', (req: Request, res: Response) => {
        const time_zone = time_zones[Math.floor(Math.random() * time_zones.length)];
        res.json(time_zone);
    });
};
