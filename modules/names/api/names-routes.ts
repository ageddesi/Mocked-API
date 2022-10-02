import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getFirstNames from '../utils/getFirstNames';
import getFullNames from '../utils/getFullNames';
import getLastNames from '../utils/getLastNames';
import getMiddleNames from '../utils/getMiddleNames';
import { getQtyFromRequest } from '../../../utils/route-utils';

/**
 * @openapi
 * definitions:
 *   FirstNamesResponse:
 *     type: object
 *     properties:
 *       fullNamesList:
 *         type: array
 *         items:
 *           type: string
 *           example: Aaron D Rackley
 *   LastNamesResponse:
 *     type: object
 *     properties:
 *       lastNamesList:
 *         type: array
 *         items:
 *           type: string
 *           example: smith
 *   ErrorResponse:
 *     type: string
 *     example: An unknown error occured, please try again.
 */

const defaultErrorMessage = 'Unable to provide a random list of names at this time. Unknown Error Occured';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/names/fullnames/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random fullnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Bobby Weiman, Tammy Swaniawski
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/fullnames/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty);
        if (randomFullNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFullNames);
    });

    /**
     * @openapi
     * '/names/fullnames/male/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random male fullnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Bobby Weiman, Tammy Swaniawski
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/fullnames/male/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty, 'male');
        if (randomFullNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFullNames);
    });

    /**
     * @openapi
     * '/names/fullnames/female/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random female fullnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Bobby Weiman, Tammy Swaniawski
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/fullnames/female/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty, 'female');
        if (randomFullNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFullNames);
    });

    /**
     * @openapi
     * '/names/firstnames/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random firstnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/FirstNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/firstnames/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty);
        if (randomFirstNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFirstNames);
    });

    /**
     * @openapi
     * '/names/firstnames/male/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random male firstnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/FirstNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/firstnames/male/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty, 'male');
        if (randomFirstNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFirstNames);
    });

    /**
     * @openapi
     * '/names/firstnames/female/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random female firstnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/FirstNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/firstnames/female/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty, 'female');
        if (randomFirstNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomFirstNames);
    });

    /**
     * @openapi
     * '/names/surnames/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random lastnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/surnames/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty);
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });

    /**
     * @openapi
     * '/names/surnames/male/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random male lastnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/surnames/male/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty, 'male');
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });

    /**
     * @openapi
     * '/names/surnames/female/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random female lastnames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/surnames/female/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty, 'female');
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });

    /**
     * @openapi
     * '/names/middlenames/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random middlenames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/middlenames/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty);
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });

    /**
     * @openapi
     * '/names/middlenames/male/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random male middlenames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/middlenames/male/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty, 'male');
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });

    /**
     * @openapi
     * '/names/middlenames/female/{qty}':
     *   get:
     *     tags:
     *     - Names
     *     summary: Obtain a list of random female middlenames
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/LastNamesResponse'
     *       '400':
     *         description: Unexpected Error
     *         schema:
     *           $ref: '#/definitions/ErrorResponse'
     */
    app.get('/names/middlenames/female/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty, 'female');
        if (randomLastNames.length === 0) {
            return res.status(400).json(defaultErrorMessage);
        }
        res.json(randomLastNames);
    });
};
