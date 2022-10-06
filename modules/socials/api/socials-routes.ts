import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { DEFAULT_POSTS_COUNT } from '../consts/default';
import { getRandomInstagramPosts } from '../utils/getRandomInstagramPosts';
import { getRandomTwitterPosts } from '../utils/getRandomTwitterPosts';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/socials/twitter':
     *   get:
     *     tags:
     *     - Socials
     *     summary: Returns a list of fake twitter posts
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     */
    app.get('/socials/twitter', (req: Request, res: Response) => {
        res.json(getRandomTwitterPosts(DEFAULT_POSTS_COUNT));
    });

    /**
     * @openapi
     * '/socials/instagram':
     *   get:
     *     tags:
     *     - Socials
     *     summary: Returns a list of fake instagram posts
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     */
    app.get('/socials/instagram', (req: Request, res: Response) => {
        res.json(getRandomInstagramPosts(DEFAULT_POSTS_COUNT));
    });
};
