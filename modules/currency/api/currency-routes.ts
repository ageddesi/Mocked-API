import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import currencySnapshot from '../data/currency-snapshot';
import GBP_USD_TICKER_DATA from '../data/gbp-usd-ticker-data';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getDigitalCurrencyAddress from '../utils/getDigitalCurrencyAddress';
import DigitalCoinEnum from '../consts/DigitalCoinEnum';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/currencies/market-overview':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Get a snapshot of the currency market
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             example: {currency: 'EUR-USD', value: '0.9945', change: '-0.0021', netChange: '-0.21%'}
     */
    app.get('/currencies/market-overview', (req: Request, res: Response) => {
        res.json(currencySnapshot);
    });

    /**
     * @openapi
     * '/currencies/gbp-usd/ticker':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Returns a set of chart data of price data for a given currency market
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     */
    app.get('/currencies/gbp-usd/ticker', (req: Request, res: Response) => {
        res.json(GBP_USD_TICKER_DATA);
    });

    /**
     * @openapi
     * '/currencies/digital-coins/bitcoin/random-address/{qty}':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Returns random bitcoin addresses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of addresses you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     */
    app.get('/currencies/digital-coins/bitcoin/random-address/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Bitcoin);
        res.json(addresses);
    });

    /**
     * @openapi
     * '/currencies/digital-coins/ethereum/random-address/{qty}':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Returns random ethereum addresses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of addresses you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     */
    app.get('/currencies/digital-coins/ethereum/random-address/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Ethereum);
        res.json(addresses);
    });

    /**
     * @openapi
     * '/currencies/digital-coins/litecoin/random-address/{qty}':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Returns random litecoin addresses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of addresses you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     */
    app.get('/currencies/digital-coins/litecoin/random-address/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const addresses = getDigitalCurrencyAddress(qty, DigitalCoinEnum.Litecoin);
        res.json(addresses);
    });
};
