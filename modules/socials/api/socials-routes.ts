import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomTwitterPosts } from '../utils/getRandomTwitterPosts';

/**
 * @openapi
 * definitions:
 *   MockTwitterPosts:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: dc90af0e-f073-45e7-8a77-69e7e94aed31
 *         handle:
 *           type: string
 *           example: '@JohnDoe'
 *         message:
 *           type: string
 *           example: Dicta amet dolores mollitia eveniet commodi.
 *         media:
 *           type: string
 *           example: https://loremflickr.com/640/480
 *         likes:
 *           type: number
 *           example: 438
 *         comments:
 *           type: number
 *           example: 10
 *         retweets:
 *           type: number
 *           example: 2
 *         date:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 */

const defaultPostsCount = 10;

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/socials/twitter':
     *   get:
     *     tags:
     *     - Socials
     *     summary: Returns random Twitter posts
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockTwitterPosts'
     */
    app.get('/socials/twitter', (req: Request, res: Response) => {
        res.json(getRandomTwitterPosts(defaultPostsCount));
    });
};
