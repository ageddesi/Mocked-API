import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomColor from '../utils/getRandomColor';
import ColorErrors from '../consts/ColorErrors';

const defaultColorSpace = "rgb";
const defaultColorFormat = "hex";

module.exports = function(app : core.Express){

    app.get("/colors/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);

        try {
            const randomColors = []

            for (let i = 0; i < qty; i++) {
                randomColors.push(getRandomColor(defaultColorSpace, defaultColorFormat));
            }

            res.json(randomColors);
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    })

    app.get("/colors/:qty/:colorSpace/:colorFormat", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const colorSpace = req.params.colorSpace || defaultColorSpace;
        const colorFormat = req.params.colorFormat || defaultColorFormat;

        try {
            const randomColors = []

            for (let i = 0; i < qty; i++) {
                randomColors.push(getRandomColor(colorSpace, colorFormat));
            }
                
            res.json(randomColors);
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