import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomVehicles from '../utils/getRandomVehicles';

module.exports = function (app: core.Express) {
  //Get a randomly generated user
  app.get('/vehicles/:qty?', (req: Request, res: Response) => {
    const qty = getQtyFromRequest(req, 1);
    const users = getRandomVehicles(qty);
    res.json(users);
  });
};
