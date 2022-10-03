import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getEcommerceCart } from '../utils/get-ecommerce-cart';

module.exports = function (app: core.Express) {
  // Returns a cart from an ecommerce app with a list of products and totals
  // with a fixed quantity
  app.get('/ecommerce/cart', (req: Request, res: Response) => {
    const ecommerceCart = getEcommerceCart(req);
    res.json(ecommerceCart);
  });

  // Returns a cart from an ecommerce app with a list of products and totals 
  // with a specified quantity
  app.get('/ecommerce/cart/:qty', (req: Request, res: Response) => {
    const ecommerceCart = getEcommerceCart(req);
    res.json(ecommerceCart);
  });
};
