import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomEmails } from '../utils/getRandomEmails';

const defaultEmailCount = 10;

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/email':
     *   get:
     *     tags:
     *     - Emails
     *     summary: Returns a list of emails
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockEmails'
     */
    app.get('/emails', (req: Request, res: Response) => {
        res.json(getRandomEmails(defaultEmailCount));
    });
};
