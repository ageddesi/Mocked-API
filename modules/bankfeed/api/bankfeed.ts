import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import BankData from '../data/bandata';

module.exports = function (app: core.Express) {
  // Get a list of bank statement
  app.get('/', (req: Request, res: Response) => {
    const response = { message: '', data: {} };
    try {
      if (req.method === 'get') {
        (response.message = 'Sucess'), (response.data = BankData);
      }
    } catch (error) {
      (response.message = 'Filed'), (response.data = error);
    }
    res.json(response);
  });
};
