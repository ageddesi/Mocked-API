import e, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from '@faker-js/faker';
import countryNumberData from '../consts/countryNumberData';
import supportedCountries from '../utils/supportedCountries';
import formats from '../consts/formats';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/phonenumbers':
     *   get:
     *     tags:
     *     - Phone Numbers
     *     summary: Obtain a random phone number in a random format
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: string
     *           example: "+1 222 333 4444"
     */

    // return a number phone number in a random format
    app.get('/phonenumbers', (req: Request, res: Response) => {
        res.json(faker.phone.number());
    });

    /**
     * @openapi
     * '/phonenumbers/country/{countrycode}/{format}':
     *   get:
     *     tags:
     *     - Phone Numbers
     *     summary: Obtain a random phone number based on country code and optional formatting
     *     parameters:
     *     - in: path
     *       name: country code
     *       description: The 2 letter code of a country (ISO 3166-1 alpha-2)
     *       required: true,
     *       type: string
     *     - in: path
     *       name: format
     *       description: The separator for the phone number 'space', 'nospace', 'dash'
     *       default: space
     *       type: string
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: string
     *           example: "+1-222-333-4444"

     */

    // return a number based on the 2 letter country code (ISO 3166-1)
    // format can be "space", "nospace", or "dash"
    // format will be "space" by default
    app.get('/phonenumbers/country/:cc/:format?', (req: Request, res: Response) => {
        const countryData = countryNumberData[req.params.cc.toUpperCase()];

        // default format to be space
        const separator = formats[req.params.format] === undefined ? formats['space'] : formats[req.params.format];

        if (countryData === undefined) {
            return res.status(400).json('Invalid country code please use 2 letter country code (ISO 3166-1)');
        } else if (countryData['format'] === undefined) {
            return res
                .status(400)
                .json('Country currently not supported, supported countries: ' + JSON.stringify(supportedCountries));
        } else {
            res.json(faker.phone.number(countryData['format']).split(' ').join(separator));
        }
    });

    /**
     * @openapi
     * '/phonenumbers/imei':
     *   get:
     *     tags:
     *     - Phone Numbers
     *     summary: Obtain a random IMEI (International Mobile Equipment Identity) number
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: string
     *           example: "85-635465-967419-2"
     */

    // return a random IMEI number
    app.get('/phonenumbers/imei', (req: Request, res: Response) => {
        res.json(faker.phone.imei());
    });
};
