import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getRandomSubArray } from '../../../utils/arrays';
import PremierLeagueData2022 from '../data/football-premier-league-2022';
import LaLigaLeagueData2022 from '../data/football-laliga-league-2022';
import SerieALeagueData2022 from '../data/football-serie-a-league-2022';
import BasketballNbaLeague2022 from '../data/basketball-nba-league-2022';
import Ligue1LeagueData2022 from '../data/football-ligue-1-league-2022';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/sports/basketball/leagues/nba/teams/{qty}':
     *   get:
     *     tags:
     *     - Sports
     *     summary: Get a list of teams in the american NBA basketball league
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
     *             $ref: '#/definitions/MockBasketBallTeams'
     */
    app.get('/sports/basketball/leagues/nba/teams/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getRandomSubArray(BasketballNbaLeague2022, qty));
    });

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

    /**
     * @openapi
     * '/sports/football/leagues/laliga/teams/{qty}':
     *   get:
     *     tags:
     *     - Sports
     *     summary: Get a list of teams in the La Liga (Spain) football league from 2022
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
    app.get('/sports/football/leagues/laliga/teams/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getRandomSubArray(LaLigaLeagueData2022, qty));
    });

    /**
     * @openapi
     * '/sports/football/leagues/seriea/teams/{qty}':
     *   get:
     *     tags:
     *     - Sports
     *     summary: Get a list of teams in the Serie A (Italy) football league from 2022
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
    app.get('/sports/football/leagues/seriea/teams/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getRandomSubArray(SerieALeagueData2022, qty));
    });

    /**
     * @openapi
     * '/sports/football/leagues/ligue1/teams/{qty}':
     *   get:
     *     tags:
     *     - Sports
     *     summary: Get a list of teams in the Ligue 1 (France) football league from 2022
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
    app.get('/sports/football/leagues/ligue1/teams/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        res.json(getRandomSubArray(Ligue1LeagueData2022, qty));
    });
};
