import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getVideo from '../utils/getVideo';

module.exports = function (app: core.Express) {
    app.get('/video', (req: Request, res: Response) => {
        res.json(getVideo());
    })
}