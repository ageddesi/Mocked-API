import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomUsers from '../utils/getRandomUsers';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/users/{qty}":
     *   get:
     *     tags:
     *     - Users
     *     summary: Obtain a random list of users with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of users you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockUsers'
     */
    app.get('/users/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        const users = getRandomUsers(qty);
        res.json(users);
    });
};
