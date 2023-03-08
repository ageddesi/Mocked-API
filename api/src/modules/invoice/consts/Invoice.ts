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

type Invoice = {
    id: string;
    invoiceNumber: string;
    title: string;
    reference: string;
    invoiceDate: Date;
    note: string;
    amount: {
        currencyCode: string;
        value: string;
    };
    recipient: {
        name: string;
        email: string;
    };
    invoicer: {
        id: string;
        name: string;
        email: string;
        address: string;
        phoneNumber: string;
    };
};

export default Invoice;
