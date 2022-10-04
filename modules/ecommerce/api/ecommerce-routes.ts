import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getEcommerceCart } from '../utils/get-ecommerce-cart';

/**
 * @openapi
 * definitions:
 *   MockEcommerceProduct:
 *     type: object
 *     properties:
 *       department:
 *         type: string
 *         example: Computers
 *       type:
 *         type: string
 *         example: Chair
 *       name:
 *         type: string
 *         example: Generic Granite Chair
 *       adjective:
 *         type: string
 *         example: Recycled
 *       description:
 *         type: string
 *         example: Carbonite web goalkeeper gloves are ergonomically designed to give easy fit
 *       material:
 *         type: string
 *         example: Wooden
 *       sku:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             meta:
 *               type: object
 *               properties:
 *                 size:
 *                   type: string
 *                   example: Standard
 *             price:
 *               type: string
 *               example: 806.00
 *             amount:
 *               type: number
 *               amount: 49403
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
