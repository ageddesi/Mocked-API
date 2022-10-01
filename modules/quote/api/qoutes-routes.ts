import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import quotes from '../data/quotes.json'.quotes;

module.exports = function(app : core.Express){

    // Get all quotes
    app.get("/quotes/:qty", (req: Request, res: Response) => {
        const qty = req.params.qty || 10;
        const qtyQuotes = quotes.slice(0, qty);
        res.json(qtyQuotes);
    })

    // Get a random quote
    app.get("/quotes/random", (req: Request, res: Response) => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(quote)
    })

}