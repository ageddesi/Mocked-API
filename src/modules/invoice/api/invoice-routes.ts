import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomInvoices from '../utils/getRandomInvoices';

const DEFAULT_INVOICE_QUANTITY = 1;

module.exports = function (app: core.Express) {
    //Get a randomly generated invoice
    /**
     * @openapi
     * "/invoices/{qty}":
     *  get:
     *    tags:
     *      - Invoices
     *    summary: Get a randomly generated invoice
     *    parameters:
     *      - name: quantity
     *        in: path
     *        description: The number of invoices to return
     *        required: false
     *        type: integer
     *        default: 1
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          type: array
     *          items:
     *            $ref: '#/definitions/MockInvoiceResponse'
     */
    app.get('/invoices/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, DEFAULT_INVOICE_QUANTITY);
        const invoices = getRandomInvoices(qty);
        res.json(invoices);
    });
};
