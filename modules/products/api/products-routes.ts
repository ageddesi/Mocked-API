import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import productReviews from '../data/product-reviews';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getProducts from '../utils/getProducts';

module.exports = function(app : core.Express){

    // Returns a random product
    app.get("/product/", (req: Request, res: Response) => {
        res.json(getProducts(1))
    })

    // Returns a random product under a specified department
    app.get("/product/:department", (req: Request, res: Response) => {
        const department = req.params.department ? req.params.department.toString() : "General";
        res.json(getProducts(1, department))
    })

    // Returns a random list of products
    app.get("/products/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getProducts(qty))
    })

    // Returns a random list of products under a specified department
    app.get("/products/:qty/:department", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const department = req.params.department ? req.params.department.toString() : "General";
        res.json(getProducts(qty, department))
    })

    // Returns a set of reviews
    app.get("/products/reviews", (req: Request, res: Response) => {
        res.json(productReviews)
    })

    // returns a set of reviews with a given rating
    app.get("/products/reviews/rating/:rating", (req: Request, res: Response) => {
        let reviews = productReviews;
        const rating = parseInt(req.params.rating);
        reviews.forEach(element => {
            element.rating = rating
        });
        res.json(reviews)
    })

}