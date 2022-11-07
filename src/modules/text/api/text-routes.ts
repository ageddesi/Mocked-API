import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from '@faker-js/faker';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function(app: core.Express) {

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
        res.json(faker.lorem.lines(1));
    })

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
    app.get('/text/lines/:qty', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        res.json(faker.lorem.lines(qty));
    })
    
    app.get('/text/paragraph', (req: Request, res: Response) => {
        res.json(faker.lorem.paragraph(1));
    })

    app.get('/text/paragraphs/:qty', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(faker.lorem.paragraphs(qty));
    })

    app.get('/text/sentence', (req: Request, res: Response) => {
        res.json(faker.lorem.sentence(1));
    })

    app.get('/text/sentences', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(faker.lorem.sentences(qty, '\n'));
    })

}