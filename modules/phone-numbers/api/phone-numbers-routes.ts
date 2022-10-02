import e, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";
import countryNumberData from '../consts/countryNumberData';
import supportedCountries from '../utils/supportedCountries';

const formats = {
    space: ' ',
    nospace: '',
    dash: '-'
}

module.exports = function(app : core.Express) {

    // return a number phone number in a random format
    app.get("/phonenumber/", (req: Request, res: Response) => {
        res.json(faker.phone.number())
    })

    // return a number based on the 2 letter country code (ISO 3166-1)
    // format can be "space", "nospace", or "dash"
    // format will be "space" by default
    app.get("/phonenumber/:cc/:format?", (req: Request, res: Response) => {
        const countryData = countryNumberData[req.params.cc.toUpperCase()];

        // default format to be space 
        const separator = formats[req.params.format] === undefined ? formats['space'] : formats[req.params.format];

        if (countryData === undefined) {
            return res.status(400).json("Invalid country code please use 2 letter country code (ISO 3166-1)");
        } else if (countryData['format'] === undefined) {
            return res.status(400).json("Country currently not supported, supported countries: " + JSON.stringify(supportedCountries));
        } else {
            res.json(faker.phone.number(countryData['format']).split(' ').join(separator))
        }
    })

    // return a random IMEI number
    app.get("/phonenumber/imei", (req: Request, res: Response) => {
        res.json(faker.phone.imei())
    })

}