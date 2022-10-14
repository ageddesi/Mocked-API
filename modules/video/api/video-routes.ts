import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getVideo from '../utils/getVideo';

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
     *           type: object
     *           properties:
     *             title:
     *               type: string
     *             description:
     *               type: string
     *             date:
     *               type: string
     *             author:
     *               type: string
     *             views:
     *               type: number
     *             likes:
     *               type: number
     *             dislikes:
     *               type: number
     *             runtimeSeconds:
     *               type: number
     *             maxQuality:
     *               type: string
     */
    app.get('/video', (req: Request, res: Response) => {
        res.json(getVideo());
    })
}