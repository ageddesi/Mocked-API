import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getEcommerceCart } from '../utils/get-ecommerce-cart';

/**
 * @openapi
 * definitions:
 *   MockEcommerceProduct:
 *     type: object
 *     properties:
 *       pricePerUnit:
 *         type: number
 *         example: 35.44
 *       quantity:
 *         type: number
 *         example: 3
 *       product:
 *         type: object
 *         properties:
 *           productId:
 *             type: number
 *             example: 1
 *           productName:
 *             type: string
 *             example: Super Gamer Juice
 *           message:
 *             type: string
 *             example: I couldn't have managed my 36 hour stint on Fallout 76, without the 4 litres of Super Gamer Juice I drank
 *           dateTime:
 *             type: string
 *             example: 2020-07-02T20:56:42.244Z
 *           rating:
 *             type: number
 *             example: 4
 *           userName:
 *             type: array
 *             items:
 *               type: string
 *               example: Myraa
 *           categories:
 *             type: array
 *             items:
 *               type: string
 *               example: sport-drinks
 */

/**
 * @openapi
 * definitions:
 *   MockEcommerceCart:
 *      type: object
 *      properties:
 *        subtotal:
 *          type: number
 *          example: 853.27
 *        couponCode:
 *          type: string
 *          example: GOAT
 *        couponPercent:
 *          type: number
 *          example: 4
 *        couponValue:
 *          type: number
 *          example: 34.13
 *        taxPercent:
 *          type: number
 *          example: 10
 *        taxApplied:
 *          type: number
 *          example: 85.33
 *        postageValue:
 *          type: number
 *          example: 9
 *        total:
 *          type: number
 *          example: 913.47
 *        products:
 *          type: array
 *          items:
 *            $ref: '#/definitions/MockEcommerceProduct'
 */

/**
 * @openapi
 * definitions:
 *   MockEcommerceCartList:
 *     type: array
 *     items:
 *       $ref: '#/definitions/MockEcommerceCart'
 */

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/ecommerce/cart':
     *   get:
     *     tags:
     *     - Ecommerce
     *     summary: Returns a random cart with random products
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockEcommerceCart'
     */
    app.get('/ecommerce/cart', (req: Request, res: Response) => {
        const ecommerceCart = getEcommerceCart(req);
        res.json(ecommerceCart);
    });

    /**
     * @openapi
     * '/ecommerce/cart/{qty}':
     *   get:
     *     tags:
     *     - Ecommerce
     *     summary: Returns a random cart with the given number of random products
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The number of carts you want
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockEcommerceCartList'
     */
    app.get('/ecommerce/cart/:qty', (req: Request, res: Response) => {
        const ecommerceCart = getEcommerceCart(req);
        res.json(ecommerceCart);
    });
};
