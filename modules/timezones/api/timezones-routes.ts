import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getTimezones } from '../utils/getTimezones';

module.exports = function (app: core.Express) {
    // Get a list of random full names
    app.get('/timezones', (req: Request, res: Response) => {
        res.json(getTimezones());
    });

    app.get('/timezones/:qty', (req: Request, res: Response) => {
        const quantity = Number(req.params.qty);

        if (isNaN(quantity)) {
            return res.status(400).json('Unable to provide a random list of timezones with the value received');
        }

        const listTimezones = [];
        for (let i = 0; i < quantity; i++) {
            listTimezones.push(getTimezones());
        }

        return res.json(listTimezones);
    });
};
