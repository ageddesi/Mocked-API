import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import getRandomColor from '../utils/getRandomColor';
import ColorErrors from '../consts/ColorErrors';

const defaultColorSpace = "rgb";
const defaultColorFormat = "hex";

module.exports = function(app : core.Express){

    app.get("/colors/", (req: Request, res: Response) => {
        try {
            const randomColor = getRandomColor(
                defaultColorSpace,
                defaultColorFormat,
            );

            res.json({
                color: randomColor
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    })

    app.get("/colors/:colorSpace/:colorFormat", (req: Request, res: Response) => {
        const colorSpace = req.params.colorSpace || defaultColorSpace;
        const colorFormat = req.params.colorFormat || defaultColorFormat;

        try {
            const randomColor = getRandomColor(
                colorSpace,
                colorFormat,
            );
                
            res.json({
                color: randomColor
            });
        } catch (error) {
            if (
                error === ColorErrors.InvalidColorSpaceError
                || error === ColorErrors.InvalidFormatError
                || error === ColorErrors.CannotConvertToHexWithAlphaError
            ) {
                res.status(400).json({
                    error: error.message
                })

                return;
            }
            
            res.status(500).json({
                error: error.message
            })
        }
    })

}