import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from '@faker-js/faker';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getTextLines from '../utils/getTextLines';
import getParagraphs from '../utils/getParagraphs';
import getSentence from '../utils/getSentence';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/text/line':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a line of random lorem ipsum text
     *     responses:
     *       '200':
     *         description: a line of random lorem ipsum text
     */
    app.get('/text/line', (req: Request, res: Response) => {
        res.json(getTextLines(1));
    });

    /**
     * @openapi
     * '/text/lines/{qty}':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a line of random lorem ipsum text
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of lines you would like
     *       type: number
     *       default: 1
     *     responses:
     *       '200':
     *         description: a line of random lorem ipsum text
     */
    app.get('/text/lines/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        res.json(getTextLines(qty));
    });

    /**
     * @openapi
     * '/text/paragraph':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a paragraph of random lorem ipsum text
     *     responses:
     *       '200':
     *         description: a paragraph of random lorem ipsum text
     */
    app.get('/text/paragraph', (req: Request, res: Response) => {
        res.json(getParagraphs(1));
    });

    /**
     * @openapi
     * '/text/paragraph/{qty}':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a paragraph of random lorem ipsum text
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of paragraph you would like
     *       type: number
     *       default: 1
     *     responses:
     *       '200':
     *         description: a paragraph of random lorem ipsum text
     */
    app.get('/text/paragraphs/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        res.json(getParagraphs(qty));
    });

    /**
     * @openapi
     * '/text/sentence':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a sentence of random lorem ipsum text
     *     responses:
     *       '200':
     *         description: a sentence of random lorem ipsum text
     */
    app.get('/text/sentence', (req: Request, res: Response) => {
        res.json(getSentence(1));
    });

    /**
     * @openapi
     * '/text/sentences/{qty}':
     *   get:
     *     tags:
     *     - Text
     *     summary: Obtain a sentence of random lorem ipsum text
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of sentences you would like
     *       type: number
     *       default: 1
     *     responses:
     *       '200':
     *         description: a sentence of random lorem ipsum text
     */
    app.get('/text/sentences/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        res.json(getSentence(qty));
    });
};
