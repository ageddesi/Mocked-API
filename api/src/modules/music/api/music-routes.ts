import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from '@faker-js/faker';
import { Music } from '../consts/Music';
import { Album } from '../consts/Album';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/music/{qty}':
     *   get:
     *     tags:
     *     - Music
     *     summary: (need to fix)Get a list of teams in the uk premier football league from 2022
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       type: number
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             example: { teamName: '', location: '', stadium: '', capacity: ''}
     */
    app.get('/music/:qty', (req: Request, res: Response) => {
        const data: Music[] = [];
        const qty = getQtyFromRequest(req);

        Array.from({ length: qty }).forEach(() => {
            data.push({
                id: faker.datatype.uuid(),
                genre: faker.music.genre(),
                song: faker.music.songName(),
            });
        });

        res.json({
            data,
            total: data.length,
        });
    });

    app.get('/album/:qty', (req: Request, res: Response) => {
        const { params } = req;
        const data: Album[] = [];

        data.push({
            id: faker.datatype.uuid(),
            name: faker.music.songName(),
            releaseDate: faker.date.past(80).toString().split(' ')[3],
            price: '$' + Math.floor(Math.random() * (20 - 10 + 1) + 10),
            publisher: faker.company.name(),
            songs: Number(params.qty),
        });

        res.json({
            data,
        });
    });
};
