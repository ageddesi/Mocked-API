import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import productReviews from '../data/product-reviews';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getProducts from '../utils/getProducts';

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

module.exports = function (app: core.Express) {
    app.get('/products/reviews', (req: Request, res: Response) => {
        res.json(productReviews);
    });

    // Returns a random product
    app.get('/product/', (req: Request, res: Response) => {
        res.json(getProducts(1));
    });

    // Returns a random product under a specified department
    app.get('/product/:department', (req: Request, res: Response) => {
        const department = req.params.department ? req.params.department.toString() : 'General';
        res.json(getProducts(1, department));
    });

    // Returns a random list of products
    app.get('/products/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getProducts(qty));
    });

    // Returns a random list of products under a specified department
    app.get('/products/:qty/:department', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const department = req.params.department ? req.params.department.toString() : 'General';
        res.json(getProducts(qty, department));
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
    app.get('/products/reviews/rating/:rating', (req: Request, res: Response) => {
        let reviews = productReviews;
        const rating = parseInt(req.params.rating);
        reviews.forEach((element) => {
            element.rating = rating;
        });
        res.json(reviews);
    });
};
