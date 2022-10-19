import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import quotes from '../data/quotes';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/quotes/random':
     *   get:
     *     tags:
     *     - Quotes
     *     summary: Get a random quote from the database
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: object
     *           example: { quote: '', author: ''}
     */
    app.get('/quotes/random', (req: Request, res: Response) => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(quote);
    });

    /**
     * @openapi
     * '/quotes/{qty}':
     *   get:
     *     tags:
     *     - Quotes
     *     summary: Get a list of all quotes from the database
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
     *             example: { quote: '', author: ''}
     */
    app.get('/quotes/:qty', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(qty >= quotes.length ? quotes : quotes.slice(0, qty));
    });
};
