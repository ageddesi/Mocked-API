import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import instrumentsList from '../data/instruments';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/instruments':
     *   get:
     *     tags:
     *     - Instruments
     *     summary: Obtain a list of all instruments
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Saxhorn, Tuba
     */
    app.get('/instruments/', (req: Request, res: Response) => {
        res.json({
            instruments: instrumentsList,
        });
    });

    /**
     * @openapi
     * '/instruments/{filterBy}':
     *   get:
     *     tags:
     *     - Instruments
     *     summary: Obtain a list of all instruments that contain filtered text
     *     parameters:
     *     - in: path
     *       name: filterBy
     *       description: The text you would like to filter instruments by
     *       type: string
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Trumpet
     */
    app.get('/instruments/:filterBy?', (req: Request, res: Response) => {
        if (req.params.filterBy) {
            const filteredList = instrumentsList.filter((source) =>
                source.toLocaleLowerCase().includes(req.params.filterBy.toLocaleLowerCase())
            );
            return res.json({
                instruments: filteredList,
            });
        }
        res.json({
            instruments: instrumentsList,
        });
    });
};
