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
     *     - Banks
     *     summary: Obtain a list of bank statements
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             properties:
     *               id:
     *                 type: string
     *                 example: 1234
     *               accountnumber:
     *                 type: string
     *                 example: 1111222233334444
     *               ifsc:
     *                 type: string
     *                 example: XYZN01234
     *               sortcode:
     *                 type: string
     *                 example: 1234
     *               isbn:
     *                 type: string
     *                 example: test
     *               statements:
     *                 type: array
     *                 example: [{ date: '2222-22-22', description: 'This is bank statement', amount: '50000' }]
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
