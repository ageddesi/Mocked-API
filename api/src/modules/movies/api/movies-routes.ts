import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import movies from '../data/movies';
import getMovieById from '../utils/getMovieById';
import getRandomMovies from '../utils/getRandomMovies';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/movies/random':
     *  get:
     *    tags:
     *    - Movies
     *    summary: Get a random movie
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          $ref: '#/definitions/MockMovie'
     */
    app.get('/movies/random', (req: Request, res: Response) => {
        const movie = getRandomMovies(1);
        res.json(movie[0]);
    });

    /**
     * @openapi
     * '/movies/{qty}':
     *  get:
     *    tags:
     *    - Movies
     *    summary: Returns random movies
     *    parameters:
     *    - in: params
     *      name: qty
     *      schema:
     *          type: number
     *          default: 10
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          type: array
     *          items:
     *            $ref: '#/definitions/MockMovie'
     */
    app.get('/movies/:qty?', (req: Request, res: Response) => {
        const quantity = getQtyFromRequest(req, 10);
        const movies = getRandomMovies(quantity);
        return res.json(movies);
    });
};
