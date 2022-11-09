import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getVideo, getVideos } from '../utils/getVideo';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/video/':
     *   get:
     *     tags:
     *     - Video
     *     summary: Obtain random data about a video
     *     responses:
     *       '200':
     *         description: Obtain an object representing random data about a video
     *         schema:
     *           $ref: '#definitions/MockVideo'
     */
    app.get('/video', (req: Request, res: Response) => {
        res.json(getVideo());
    });

    /**
     * @openapi
     * '/video/:qty':
     *   get:
     *     tags:
     *     - Video
     *     summary: Obtain a list of random video data
     *     responses:
     *       '200':
     *         description: Obtain a list of random video data object representing random data about a video
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#definitions/MockVideo'
     */
    app.get('/video/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getVideos(qty));
    });
};
