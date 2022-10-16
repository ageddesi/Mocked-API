import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getRandomSubArray } from '../../../utils/arrays';
import { getAllNews, getNewsBySlug } from '../utils/getNews';
import { INews } from '../utils/news.interface';

/**
 * @openapi
 * definitions:
 *   MockNews:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: 'Bitcoin: Breaking Up Money and State'
 *         slug:
 *           type: string
 *           example: Bitcoin:-Breaking-Up-Money-and-State
 *         summary:
 *           type: string
 *           example: 'The only drink I will ever need'
 *         category:
 *           type: string
 *           example: 'AI'
 *         language:
 *           type: string
 *           example: en
 *         publishedDate:
 *           type: string
 *           example: '1984-05-21 00:02:11'
 *         author:
 *           type: string
 *           example: sport-drinks
 */

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/news/{qty}':
     *   get:
     *     tags:
     *     - News
     *     summary: Get a list of news
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
     *           $ref: '#/definitions/MockNews'
     *             
     */
    app.get('/news/:qty', (req: Request, res: Response) => {
        let qty = getQtyFromRequest(req);

        if (!qty) {
            qty = 10;
        }

        const data : INews[] = getAllNews(qty);

        if (!data || data.length === 0) {
            return res.status(404).json();
        }

        res.json(data);
    });

    /**
     * @openapi
     * '/news/slug/{slug}':
     *   get:
     *     tags:
     *     - News
     *     summary: Get a news by slug
     *     parameters:
     *     - in: path
     *       name: slug
     *       default: Bitcoin:-Breaking-Up-Money-and-State
     *       type: string
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockNews'
     */
    app.get('/news/slug/:slug', (req: Request, res: Response) => {
        const { slug } = req.params;
        const data : INews[] = getNewsBySlug(slug);

        if (!data || data.length === 0) {
            return res.status(404).json();
        }

        res.json(data);
    });
};
