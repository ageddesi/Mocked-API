import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import quotes from '../data/quotes.json'.quotes;
import fs from 'fs';

module.exports = function(app : core.Express){

    // Get all quotes
    app.get("/quotes", (req: Request, res: Response) => {
        res.json(quotes)
    })

    // Get a random quote
    app.get("/quotes/random", (req: Request, res: Response) => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(quote)
    })

    // Add a new quote
    app.post("/quotes", (req: Request, res: Response) => {
        const quote = {
            quote: req.body.quote,
            author: req.body.author
        };
        quotes.push(quote);
        fs.writeFile('./data/quotes.json', JSON.stringify({quotes: quotes}), (err) => {
            if(err) throw err;
            res.json("Quote added successfully");
        });
    })
}