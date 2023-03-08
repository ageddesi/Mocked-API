import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import currencySnapshot from '../data/currency-snapshot';
import GBP_USD_TICKER_DATA from '../data/gbp-usd-ticker-data';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getDigitalCurrencyAddress from '../utils/getDigitalCurrencyAddress';
import getDigitalCurrencyTxList from '../utils/getDigitalCurrencyTxList';
import getDigitalCurrencyLedger from '../utils/getDigitalCurrencyLedger';
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

    /**
     * @openapi
     * '/currencies/digital-coins/ethereum/tx-list/:address?/:qty?':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Get the list of transactions performed by an address
     *     parameters:
     *     - in: path
     *       name: address
     *       description: The address that performed the transactions
     *       type: string
     *     - in: path
     *       name: qty
     *       description: The number of transactions to be returned
     *       type: number
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: json
     *           items:
     *             type: object
     *             example: [{"blockNumber":"27805946","timeStamp":"9942266267","hash":"0xaN6aaOQJX5PFBhXH1RjUlygLdJKqC01qRPC0QbKZ5TIowf7iJnB5DQngiV93jik5","nonce":"18","blockHash":"0xueMI7Aje55ctOTWcCpgMKoyD6Fr5K91uGkaxbpex1gRvKrq3oPyPB5U6qMf7Ia2f","transactionIndex":"5","from":"0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC","to":"0x100807ff56cbc56f4574e515ddbefdbb8d86a7a0","value":"0.1759733580282401","gas":"2270","gasPrice":"573605567923","isError":"0","txreceipt_status":"1","input":"0xKuzGOUc0zN7sGqfFrmhLSsQKz69uZNUbHgSnnTldsCfFBHa682mvwIm2Ly3szQadWJftne0BzIO4obORd3dGKZIXAQ5XEnIveiwQ8ZXwQW9Q1MtnaSh1x5zjJ3Mc4OVHzmNxFMDe","confirmations":"33642"}]
     */

    //Returns the list of transactions performed by an address
    app.get('/currencies/digital-coins/ethereum/tx-list/:address?/:qty?', (req: Request, res: Response) => {
        const address = req.params.address;
        const qty = getQtyFromRequest(req);
        const tx_list = getDigitalCurrencyTxList(address, qty);
        res.json(tx_list);
    });

    /**
     * @openapi
     * '/currencies/digital-coins/ripple/ledgers-list/{qty}':
     *   get:
     *     tags:
     *     - Currencies
     *     summary: Returns a random set of Ripple (XPR) Validated Ledgers
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of ledgers you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/MockedRippleLedger'
     */
    app.get('/currencies/digital-coins/ripple/ledgers-list/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const ledger = getDigitalCurrencyLedger(qty);
        res.json(ledger);
    });
};
