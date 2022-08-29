import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import currencySnapshot from '../data/currency-snapshot';
import GBP_USD_TICKER_DATA from '../data/gbp-usd-ticker-data';

module.exports = function(app: core.Express){

    // Returns a snapshot of data for the state of the currency market
    app.get("/currencies/market-overview", (req: Request, res: Response) => {
        res.json(currencySnapshot);
    })

    // Returns a set of chart data of price data for a given currency market
    app.get("/currencies/gbp-usd/ticker", (req: Request, res: Response) => {
        res.json(GBP_USD_TICKER_DATA);
    })


}