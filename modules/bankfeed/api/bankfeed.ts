import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';

import BankData from '../data/bankdata'; //Bank feed json

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/bank/feed/:qty':
     *   get:
     *     tags:
     *     - Bankfeed
     *     summary: Get a list of bank feed
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount would like returned in bank feed json
     *       type: number
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: json
     *           items:
     *             type: object
     *             example: { id: '', accountnumber: '', ifsc: '', sortcode: '' , isbn:'' , statement:[]}
     */
    app.get('/bank/feed/:qty', (req: Request, res: Response) => {
        const defaultErrorMessage = 'Unable to provide a bank statement. Unknown Error Occured';
        const qty = getQtyFromRequest(req);

        try {
            if (qty) {
                BankData.statement[0].amount = qty.toString();
                res.status(200).json(BankData);
            }
        } catch (error) {
            return res.status(400).json(defaultErrorMessage);
        }
    });
};
