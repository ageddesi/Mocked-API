import e, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";
import countryNumberData from '../consts/countryNumberData';
import supportedCountries from '../utils/supportedCountries';

module.exports = function(app : core.Express) {

    // return a number phone number in a random format
    app.get("/phonenumber/", (req: Request, res: Response) => {
        res.json(faker.phone.number())
    })

    // return a number based on the 2 letter country code (ISO 3166-1)
    app.get("/phonenumber/:cc", (req: Request, res: Response) => {
        const countryData = countryNumberData[req.params.cc.toUpperCase()];
        if (countryData === undefined) {
            return res.status(400).json("Invalid country code please use 2 letter country code (ISO 3166-1)");
        } else if (countryData['format'] === undefined) {
            console.log(supportedCountries)
            return res.status(400).json("Country currently not supported, supported countries: " + JSON.stringify(supportedCountries));
        } else {
            res.json(faker.phone.number(countryData['format']))
        }
    })

    // return a random IMEI number
    app.get("/phonenumber/imei", (req: Request, res: Response) => {
        res.json(faker.phone.imei())
    })

}