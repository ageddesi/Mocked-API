import * as core from 'express-serve-static-core';
import { Request, Response } from 'express';
import ElementTypes from '../consts/ElementTypes';

module.exports = function(app: core.Express){
  app.get("/elements", (req: Request, res: Response) => {
    res.json({
      elements: ElementTypes
    })
  });
  app.get("/elements/:atomicnbr", (req: Request, res: Response) => {
    const element = parseInt(req.params.atomicnbr) - 1;
    if (isNaN(element) || element < 0 || element > 112)
      return res.status(400).json({error: "not in the periodic table"})
    return res.json({element: ElementTypes[element]});
  });
}
