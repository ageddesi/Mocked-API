import e, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomCoordinates, getCountryCoordinates } from '../utils/getCoordinates';
import centroids from '../consts/centroids';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/location/co-ordinates/random/{qty}':
     *   get:
     *     tags:
     *     - Coordinates
     *     summary: Obtain random coordinates
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of coordinates you require
     *       type: string
     *       default: 0
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *              type: object
     *              example: {longitude: '-0.1277583', latitude: '51.5073509'}
     */

    // return a random Coordinates
    app.get('/location/co-ordinates/random/:qty', (req: Request, res: Response) => {
        const quantity = getQtyFromRequest(req);

        if (isNaN(quantity)) {
            return res.status(400).json('Unable to provide a random list of Coordinates with the value received');
        }

        const listElements = [];
        for (let i = 0; i < quantity; i++) {
            listElements.push(getRandomCoordinates());
        }

        res.json(listElements);
    });

    /**
     * @openapi
     * '/location/co-ordinates/country/{code}/{qty}':
     *   get:
     *     tags:
     *     - Coordinates
     *     summary: Obtain random coordinates from a specified country
     *     parameters:
     *     - in: path
     *       name: code
     *       description: The Country code of the country you require coordinates
     *     - in: path
     *       name: qty
     *       description: The amount of coordinates you require
     *       type: string
     *       default: 0
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *              type: object
     *              example: {longitude: '23.5688', latitude: '78.5512', country: "India"}
     */

    // return a random Coordinates for a specified country
    app.get('/location/co-ordinates/country/:code/:qty', (req: Request, res: Response) => {
        const quantity = getQtyFromRequest(req);
        const code = (req.params?.code).toUpperCase();

        if (isNaN(quantity)) {
            return res.status(400).json('Unable to provide a random list of Coordinates with the value received');
        }

        if (code.length !== 2) {
            return res.status(400).json('Country code should be of the length 2 characters');
        }

        if (!RegExp(/^\p{L}/, 'u').test(code)) {
            return res.status(400).json('Country code should be a character string');
        }

        const countryArray = Object.keys(centroids);
        if (!countryArray.includes(code)) {
            return res.status(200).json('Not able generate coordinates for the provided country code');
        }

        const listElements = [];
        for (let i = 0; i < quantity; i++) {
            listElements.push(getCountryCoordinates(code));
        }

        res.json(listElements);
    });
};
