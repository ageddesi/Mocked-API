import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomVehicles from '../utils/getRandomVehicles';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/vehicles/{qty}":
     *   get:
     *     tags:
     *     - Vehicles
     *     summary: Obtain a random list of vehicles
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of vehicles you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockVehicles'
     */
    app.get('/vehicles/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 10);
        const users = getRandomVehicles(qty);
        res.json(users);
    });
};
