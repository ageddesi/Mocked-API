import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomUsers from '../utils/getRandomUsers';


module.exports = function(app: core.Express){

    //Get a randomly generated user
    app.get("/users/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        const users = getRandomUsers(qty);
        res.json(users);
    })

}