import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { genMAC } from '../utils/getmac';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * definitions:
     *  MockipResponse:
     *    type: object
     *    properties:
     *      ip:
     *        type: string
     *        example: "17.98.178.190"
     */

    /**
     * @openapi
     * '/ip/{qty}':
     *   get:
     *     tags:
     *     - IPs
     *     summary: Returns a random list of ip addresses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The number of ip you want
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockipResponse'
     */
    app.get('/ip/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);

        try {
            const ip = [];

            for (let i = 0; i < qty; i++) {
                const random_ip =
                    Math.floor(Math.random() * 255) +
                    1 +
                    '.' +
                    Math.floor(Math.random() * 255) +
                    '.' +
                    Math.floor(Math.random() * 255) +
                    '.' +
                    Math.floor(Math.random() * 255);
                ip.push(random_ip);
            }

            res.json(ip);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    });

    /**
     * @openapi
     * definitions:
     *  MockmacResponse:
     *    type: object
     *    properties:
     *      mac:
     *        type: string
     *        example: "44:F8:2A:57:6A:16"
     */

    /**
     * @openapi
     * '/mac/{qty}':
     *   get:
     *     tags:
     *     - IPs
     *     summary: Returns a random list of mac addresses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The number of mac you want
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockmacResponse'
     */
    app.get('/mac/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);

        try {
            const mac = [];

            for (let i = 0; i < qty; i++) {
                mac.push(genMAC());
            }

            res.json(mac);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    });
};
