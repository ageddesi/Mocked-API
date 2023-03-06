import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getRandomWeathers } from '../utils/getRandomWeathers';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/weathers/{qty}":
     *   get:
     *     tags:
     *     - Weathers
     *     summary: Obtain a random list of weathers
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of weathers you require
     *       type: string
     *       default: 1
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/MockWeather'
     */
    app.get('/weathers/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 10);
        const weathers = getRandomWeathers(qty);
        res.json(weathers);
    });
};
