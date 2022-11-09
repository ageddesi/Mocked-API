import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { getQtyFromRequest } from '../../../utils/route-utils';
import getRandomColor from '../utils/getRandomColor';
import ColorErrors from '../consts/ColorErrors';

const defaultColorSpace = 'rgb';
const defaultColorFormat = 'hex';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/colors/{qty}':
     *   get:
     *     tags:
     *     - Colors
     *     summary: Obtain a random color
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: They quantity of colors you want to generate
     *       type: string
     *       default: 1
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: efc27b
     */
    app.get('/colors/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        try {
            const randomColors = [];

            for (let i = 0; i < qty; i++) {
                randomColors.push(getRandomColor(defaultColorSpace, defaultColorFormat));
            }

            res.json(randomColors);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    });

    /**
     * @openapi
     * '/colors/{qty}/{colorSpace}/{colorFormat}':
     *   get:
     *     tags:
     *       - Colors
     *     summary: Obtain a random color
     *     parameters:
     *       - in: path
     *         name: qty
     *         description: They quantity of colors you want to generate
     *         type: string
     *         default: 1
     *         required: true
     *       - in: path
     *         name: colorSpace
     *         description: The color space of the output color
     *         required: true
     *         type: string
     *         enum:
     *           - rgb
     *           - rgba
     *           - hsl
     *           - hsla
     *           - hsv
     *           - hsva
     *           - cmyk
     *           - cmyka
     *         default: rgb
     *       - in: path
     *         name: colorFormat
     *         description: |
     *           The format of the output color
     *           Note: hex is only available if the color space doesn't include alpha"
     *         required: true
     *         type: string
     *         enum:
     *           - hex
     *           - decimal
     *           - css
     *         default: hex
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: efc27b
     */
    app.get('/colors/:qty/:colorSpace/:colorFormat', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        const colorSpace = req.params.colorSpace || defaultColorSpace;
        const colorFormat = req.params.colorFormat || defaultColorFormat;

        try {
            const randomColors = [];

            for (let i = 0; i < qty; i++) {
                randomColors.push(getRandomColor(colorSpace, colorFormat));
            }

            res.json(randomColors);
        } catch (error) {
            if (
                error === ColorErrors.InvalidColorSpaceError ||
                error === ColorErrors.InvalidFormatError ||
                error === ColorErrors.CannotConvertToHexWithAlphaError
            ) {
                res.status(400).json({
                    error: error.message,
                });

                return;
            }

            res.status(500).json({
                error: error.message,
            });
        }
    });
};
