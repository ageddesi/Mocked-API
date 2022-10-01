import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

module.exports = function(app : core.Express){

    app.get("/colors/", (req: Request, res: Response) => {
        res.json({
            test: "test"
        })
    })

}