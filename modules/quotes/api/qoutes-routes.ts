import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import quotes from '../data/quotes';

module.exports = function(app : core.Express){

    // Get all quotes
    app.get("/quotes/:qty", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(qty >= quotes.length ? quotes : quotes.slice(0, qty));
    })

    // Get a random quote
    app.get("/quotes/random", (req: Request, res: Response) => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(quote)
    })

}