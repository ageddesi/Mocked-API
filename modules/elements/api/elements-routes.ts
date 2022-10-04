import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getElement } from '../utils/getElement';

module.exports = function (app: core.Express) {
    // Get a list of random full names
    app.get('/elements', (req: Request, res: Response) => {
        res.json(getElement());
    });

    app.get('/elements/:qty', (req: Request, res: Response) => {
        const quantity = Number(req.params.qty);

        if (isNaN(quantity)) {
            return res.status(400).json('Unable to provide a random list of Chemical Elements with the value received');
        }

        const listElements= [];
        for (let i = 0; i < quantity; i++) {
            listElements.push(getElement());
        }

        return res.json(listElements);
    });
};
