import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import productReviews from '../data/product-reviews';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getProducts from '../utils/getProducts';
import { randomRating } from '../../../utils/numbers';

/**
 * @openapi
 * definitions:
 *   MockProductReview:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         productName:
 *           type: string
 *           example: Super Gamer Juice
 *         productId:
 *           type: number
 *           example: 1
 *         message:
 *           type: string
 *           example: The only drink I will ever need.
 *         dateTime:
 *           type: string
 *           example: '1984-05-21T00:02:11.497Z'
 *         rating:
 *           type: number
 *           example: 1
 *         userName:
 *           type: string
 *           example: Aaron Rackley
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *             example: sport-drinks
 */

/**
 * @openapi
 * definitions:
 *   MockProduct:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         department:
 *           type: string
 *           example: Computers
 *         type:
 *           type: string
 *           example: Chair
 *         name:
 *           type: string
 *           example: Generic Granite Chair
 *         adjective:
 *           type: string
 *           example: Recycled
 *         description:
 *           type: string
 *           example: Carbonite web goalkeeper gloves are ergonomically designed to give easy fit
 *         material:
 *           type: string
 *           example: Wooden
 *         sku:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               meta:
 *                 type: object
 *                 properties:
 *                   size:
 *                     type: string
 *                     example: Standard
 *               price:
 *                 type: string
 *                 example: 806.00
 *               amount:
 *                 type: number
 *                 amount: 49403
 */

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/product':
     *   get:
     *     tags:
     *     - Products
     *     summary: Returns a random product
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProduct'
     */
    app.get('/product/', (req: Request, res: Response) => {
        res.json(getProducts(1));
    });

    /**
     * @openapi
     * '/product/department/{department}':
     *   get:
     *     tags:
     *     - Products
     *     summary: Returns a random product under a specified department
     *     parameters:
     *     - in: path
     *       name: department
     *       description: The department from which you want the random product from
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProduct'
     */
    app.get('/product/department/:department', (req: Request, res: Response) => {
        const department = req.params.department ? req.params.department.toString() : 'General';
        res.json(getProducts(1, department));
    });

    /**
     * @openapi
     * '/products/reviews':
     *   get:
     *     tags:
     *     - Products
     *     summary: Obtain a list of random reviews
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProductReview'
     */
    app.get('/products/reviews', (req: Request, res: Response) => {
        res.json(productReviews);
    });

    /**
     * @openapi
     * '/products/{qty}':
     *   get:
     *     tags:
     *     - Products
     *     summary: Returns a random list of products
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The number of products you want
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProduct'
     */
    app.get('/products/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getProducts(qty));
    });

    /**
     * @openapi
     * '/products/{qty}/{department}':
     *   get:
     *     tags:
     *     - Products
     *     summary: Returns a random list of products under a specified department
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The number of products you want
     *     - in: path
     *       name: department
     *       description: The department from which you want the random product from
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProduct'
     */
    app.get('/products/:qty/:department', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const department = req.params.department ? req.params.department.toString() : 'General';
        res.json(getProducts(qty, department));
    });

    /**
     * @openapi
     * '/products/reviews/ratings/{rating}':
     *   get:
     *     tags:
     *     - Products
     *     summary: Obtain a list of random reviews with a specific rating
     *     parameters:
     *     - in: path
     *       name: rating
     *       description: The rating you would like your mocked reviews to be
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockProductReview'
     */
    app.get('/products/reviews/ratings/:rating', (req: Request, res: Response) => {
        const rating = req.params.rating
            ? parseInt(req.params.rating) <= 5
                ? parseInt(req.params.rating)
                : 5
            : randomRating();
        const filtereReview = productReviews.filter((element) => (element.rating = rating));
        res.json(filtereReview);
    });
};
