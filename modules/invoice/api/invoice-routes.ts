import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomInvoices from '../utils/getRandomInvoices';

/**
 * @openapi
 * definitions:
 *  MockInvoiceResponse:
 *   type: object
 *   properties:
 *    id:
 *      type: string
 *      example: 083f5a5a-5b9c-4b5e-8c1a-1b5b1b5b1b5b
 *    invoiceNumber:
 *      type: string
 *      example: 123456
 *    reference:
 *      type: string
 *      example: 123456
 *    invoiceDate:
 *      type: string
 *      example: '1984-05-21T00:02:11.497Z'
 *    amount:
 *      type: object
 *      properties:
 *        currencyCode:
 *          type: string
 *          example: USD
 *        value:
 *          type: string
 *          example: 100.00
 *    note:
 *      type: string
 *      example: This is a note
 *    title:
 *      type: string
 *      example: This is a title
 *    invoicer:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          example: 083f5a5a-5b9c-4b5e-8c1a-1b5b1b5b1b5b
 *        name:
 *          type: string
 *          example: Aaron Rackley
 *        email:
 *          type: string
 *          example: example@gmail.com
 *        address:
 *          type: string
 *          example: 123 Main St
 *        phoneNumber:
 *          type: string
 *          example: 879.503.8499 x25520
 *    recipient:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          example: Aaron Rackley
 *        email:
 *          type: string
 *          example: example@gmail.com
 */

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
   *          $ref: '#/definitions/MockInvoiceResponse'
   */
  app.get('/invoices/:qty?', (req: Request, res: Response) => {
    const qty = getQtyFromRequest(req, DEFAULT_INVOICE_QUANTITY);
    const invoices = getRandomInvoices(qty);
    res.json(invoices);
  });
};
