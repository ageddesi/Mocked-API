import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import countriesList from './data/countries';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/countries':
     *   get:
     *     tags:
     *     - Countries
     *     summary: Obtain a list of all countries
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: United Kingdom, United States Of America
     */
    app.get('/countries/', (req: Request, res: Response) => {
        res.json({
            countries: countriesList,
        });
    });

    /**
     * @openapi
     * '/countries/{filterBy}':
     *   get:
     *     tags:
     *     - Countries
     *     summary: Obtain a list of all countries that contain filtered text
     *     parameters:
     *     - in: path
     *       name: filterBy
     *       description: The text you would like to filter countries by
     *       type: string
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: United Kingdom
     */
    app.get('/countries/:filterBy?', (req: Request, res: Response) => {
        if (req.params.filterBy) {
            const filteredList = countriesList.filter((source) =>
                source.toLocaleLowerCase().includes(req.params.filterBy.toLocaleLowerCase())
            );
            return res.json({
                countries: filteredList,
            });
        }
        res.json({
            countries: countriesList,
        });
    });
};
