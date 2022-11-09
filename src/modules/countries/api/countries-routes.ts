import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import countriesList from '../data/countries';
import provincesList from '../data/provinces';

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
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: Iceland
     *               officialName:
     *                 type: string
     *                 example: Iceland
     *               capital:
     *                 type: string
     *                 example: Reykjavik
     *               continent:
     *                 type: string
     *                 example: Europe
     *               cca3:
     *                 type: string
     *                 example: ISL
     *               areaInKm2:
     *                 type: string
     *                 example: 103000
     *               flagUrl:
     *                 type: string
     *                 example: https://flagcdn.com/w320/is.png
     *               mapsUrl:
     *                 type: string
     *                 example: https://goo.gl/maps/WxFWSQuc3oamNxoE6
     *               currencyName:
     *                 type: string
     *                 example: Icelandic króna
     *               currencySymbol:
     *                 type: string
     *                 example: kr
     */
    app.get('/countries/', (req: Request, res: Response) => {
        res.json({
            countries: countriesList,
        });
    });

    /**
     * @openapi
     * '/countries/provinces':
     *   get:
     *     tags:
     *     - Countries
     *     summary: Obtain a list of all countries and their associated provinces.
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: Iceland
     *               provinces:
     *                 type: array
     *                 items:
     *                   type: string
     *                   example: Austurland
     */
    app.get('/countries/provinces/', (req: Request, res: Response) => {
        res.json({
            countries: provincesList,
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
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: Iceland
     *               officialName:
     *                 type: string
     *                 example: Iceland
     *               capital:
     *                 type: string
     *                 example: Reykjavik
     *               continent:
     *                 type: string
     *                 example: Europe
     *               cca3:
     *                 type: string
     *                 example: ISL
     *               areaInKm2:
     *                 type: string
     *                 example: 103000
     *               flagUrl:
     *                 type: string
     *                 example: https://flagcdn.com/w320/is.png
     *               mapsUrl:
     *                 type: string
     *                 example: https://goo.gl/maps/WxFWSQuc3oamNxoE6
     *               currencyName:
     *                 type: string
     *                 example: Icelandic króna
     *               currencySymbol:
     *                 type: string
     *                 example: kr
     */
    app.get('/countries/:filterBy?', (req: Request, res: Response) => {
        if (req.params.filterBy) {
            const filteredList = countriesList.filter((source) =>
                source.name.toLocaleLowerCase().includes(req.params.filterBy.toLocaleLowerCase())
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
