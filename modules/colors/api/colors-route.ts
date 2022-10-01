import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import getRandomColor from '../utils/getRandomColor';

const defaultColorSpace = "rgb";
const defaultColorFormat = "hex";

module.exports = function(app : core.Express){

    app.get("/colors/", (req: Request, res: Response) => {
        // TODO: Add error handling and proper error responses
        const randomColor = getRandomColor(
            defaultColorSpace,
            defaultColorFormat,
        );

        res.json({
            color: randomColor
        });
    })

    app.get("/colors/:colorSpace/:colorFormat", (req: Request, res: Response) => {
        const colorSpace = req.params.colorSpace || defaultColorSpace;
        const colorFormat = req.params.colorFormat || defaultColorFormat;

        // TODO: Add error handling and proper error responses
        const randomColor = getRandomColor(
            colorSpace,
            colorFormat,
        );
            
        res.json({
            color: randomColor
        });
    })

}