import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import facts from '../data/facts';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/facts/random':
     *   get:
     *     tags:
     *     - Facts
     *     summary: Get a random fact from the database
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: object
     *           example: { fact: '', category: ''}
     */
    app.get('/facts/random', (req: Request, res: Response) => {
        const fact = facts[Math.floor(Math.random() * facts.length)];
        res.json(fact);
    });

    /**
     * @openapi
     * '/facts/{qty}':
     *   get:
     *     tags:
     *     - Facts
     *     summary: Get a list of all facts from the database
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       default: 10
     *       type: number
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             example: { fact: '', category: ''}
     */
    app.get('/facts/:qty', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(qty >= facts.length ? facts : facts.slice(0, qty));
    });
};
