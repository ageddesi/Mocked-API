import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import currencySnapshot from '../data/currency-snapshot';
import GBP_USD_TICKER_DATA from '../data/gbp-usd-ticker-data';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getDigitalCurrencyAddress from '../utils/getDigitalCurrencyAddress';
import DigitalCoinEnum from '../consts/DigitalCoinEnum';

module.exports = function(app: core.Express){

    // Returns a snapshot of data for the state of the currency market
    app.get("/currencies/market-overview", (req: Request, res: Response) => {
        res.json(currencySnapshot);
    })

    // Returns a set of chart data of price data for a given currency market
    app.get("/currencies/gbp-usd/ticker", (req: Request, res: Response) => {
        res.json(GBP_USD_TICKER_DATA);
    })

    // Returns a set of bitcoin digital addresses
    app.get("/currencies/digital-coins/bitcoin/random-address/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req); 
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Bitcoin);
        res.json(addresses);
    })

    // Returns a set of ethereum digital addresses
    app.get("/currencies/digital-coins/ethereum/random-address/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Ethereum);
        res.json(addresses);
    })

    // Returns a set of litecoin digital addresses
    app.get("/currencies/digital-coins/litecoin/random-address/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Litecoin);
        res.json(addresses);
    })

}