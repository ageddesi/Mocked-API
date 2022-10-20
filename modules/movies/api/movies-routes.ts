import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
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
        const randomNumber = Math.floor(Math.random() * (122-0) + 0)
        const movie = getMovieById(randomNumber);

        res.json(movie);
    });

    /**
     * @openapi
     * '/api/movies/{qty}':
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
