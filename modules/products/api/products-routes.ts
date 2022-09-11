import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import productReviews from '../data/product-reviews';

module.exports = function(app : core.Express){

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