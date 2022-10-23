import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';

import BankData from '../data/bankdata'; //Bank feed json

module.exports = function (app: core.Express) {
    // Get a list of bank statement
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
