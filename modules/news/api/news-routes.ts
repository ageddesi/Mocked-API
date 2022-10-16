import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getAllNews, getNewsBySlug } from '../utils/getNews';
import { INews } from '../consts/news.interface';

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

        const data: INews[] = getAllNews(qty);

        if (!data || data.length === 0) {
            return res.status(400).json();
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
        const data: INews[] = getNewsBySlug(slug);

        if (!data || data.length === 0) {
            return res.status(400).json();
        }

        res.json(data);
    });
};
