import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import randomAddresses from './utils/random-address';
import { getQtyFromRequest } from '../../utils/route-utils';
import { getCountryNameFromRequest } from '../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/address":
     *   get:
     *     tags:
     *     - Address
     *     summary: Obtain a USA address (by default)
     *     responses:
     *       '200':
     *         description: An array of single address string
     * 		   schema:
     *           type: array
     *           items:
     *             type: object
     *             example: ['Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA']
     */
    app.get('/address', (req: Request, res: Response) => {
        const address = randomAddresses();
        res.json(address);
    });

    // get a random UK/USA address
    /**
     * @openapi
     * '/address/:country':
     *   get:
     *     tags:
     *     - Address
     *     summary: Obtain a random UK/USA address
     *     parameters:
     *       - in: path
     *         name: country
     *         description: The country whose address is required; can be 'usa' or 'uk'
     *         type: string
     *     responses:
     *       '200':
     *          description: An array of single address string
     *          schema:
     *            type: array
     *            items:
     *              type: string
     *              example: ['Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA']
     */
    app.get('/address/:country?', (req: Request, res: Response) => {
        const country = getCountryNameFromRequest(req);
        const address = randomAddresses(1, country);
        res.json(address);
    });

    // get random USA/UK addresses
    /**
     * @openapi
     * '/address/:country/:qty':
     *   get:
     *     tags:
     *     - Address
     *     summary: Obtain random UK/USA addresses
     *     parameters:
     *       - in: path
     *         name: country
     *         description: The country whose address is required; can be 'usa' or 'uk'
     *         type: string
     *       - in: path
     *         name: qty
     *         description: The number of addresses required
     *         type: number
     *     responses:
     *       '200':
     *          description: An array of address strings
     *          schema:
     *            type: array
     *            items:
     *              type: string
     *              example: ['Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA', 'Jamal Khan\n600 Zumbuli House\nWashingtom 44521\nUSA']
     */
    app.get('/address/:country?/:qty?', (req: Request, res: Response) => {
        const country = getCountryNameFromRequest(req);
        const qty = getQtyFromRequest(req);
        const addresses = randomAddresses(qty, country);
        res.json(addresses);
    });
};
