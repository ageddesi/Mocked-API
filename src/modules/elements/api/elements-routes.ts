import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getElement } from '../utils/getElement';

/**
 * @openapi
 * definitions:
 *   MockChemicalElement:
 *     type: object
 *     properties:
 *       symbol:
 *         type: string
 *         example: Cl
 *       name:
 *         type: string
 *         example: Chlorine
 *       atomicNumber:
 *         type: number
 *         example: 17
 */

/**
 * @openapi
 * definitions:
 *   MockChemicalElementList:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         symbol:
 *           type: string
 *           example: Cl
 *         name:
 *           type: string
 *           example: Chlorine
 *         atomicNumber:
 *           type: number
 *           example: 17
 */

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/elements':
     *   get:
     *     tags:
     *     - Elements
     *     summary: Obtain a random element
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockChemicalElement'
     */
    app.get('/elements', (req: Request, res: Response) => {
        res.json(getElement());
    });

    /**
     * @openapi
     * '/elements/{qty}':
     *   get:
     *     tags:
     *     - Elements
     *     summary: Obtain a list of the given number of random elements
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The quantity of elements you would want to be returned
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockChemicalElementList'
     */
    app.get('/elements/:qty', (req: Request, res: Response) => {
        const quantity = Number(req.params.qty);

        if (isNaN(quantity)) {
            return res.status(400).json('Unable to provide a random list of Chemical Elements with the value received');
        }

        const listElements = [];
        for (let i = 0; i < quantity; i++) {
            listElements.push(getElement());
        }

        return res.json(listElements);
    });
};
