import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomInvoices from '../utils/getRandomInvoices';

const DEFAULT_INVOICE_QUANTITY = 1;

module.exports = function (app: core.Express) {
  //Get a randomly generated invoice
  app.get('/invoices/:qty?', (req: Request, res: Response) => {
    const qty = getQtyFromRequest(req, DEFAULT_INVOICE_QUANTITY);
    const invoices = getRandomInvoices(qty);
    res.json(invoices);
  });
};
