import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import instrumentsList from '../data/instruments';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/instruments/{qty}':
     *   get:
     *     tags:
     *     - Instruments
     *     summary: Obtain a list of all instruments
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: They quantity of instruments you want to generate
     *       type: string
     *       default: 1
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Saxhorn, Tuba
     */
    app.get('/instruments/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json({
            instruments: instrumentsList.slice(0, qty),
        });
    });

    /**
     * @openapi
     * '/instruments/{filterBy}/{qty}':
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
     *     - in: path
     *       name: qty
     *       description: They quantity of instruments you want to generate
     *       type: string
     *       default: 1
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
    app.get('/instruments/:filterBy?/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        if (req.params.filterBy) {
            const filteredList = instrumentsList
                .filter((source) => source.toLocaleLowerCase().includes(req.params.filterBy.toLocaleLowerCase()))
                .slice(0, qty);
            return res.json({
                instruments: filteredList,
            });
        }
        res.json({
            instruments: instrumentsList,
        });
    });
};
