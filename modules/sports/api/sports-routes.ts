import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import PremierLeagueData2022 from '../data/football-premier-league-2022';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/sports/football/leagues/premier/teams':
     *   get:
     *     tags:
     *     - Sports
     *     summary: Get a list of teams in the uk premier football league from 2022
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of results you would like returned
     *       default: 10
     *       type: number
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             example: { teamName: '', location: '', stadium: '', capacity: ''}
     */
    app.get('/sports/football/leagues/premier/teams', (req: Request, res: Response) => {
        res.json(PremierLeagueData2022);
    });
};
