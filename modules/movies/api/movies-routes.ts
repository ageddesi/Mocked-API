import * as core from 'express-serve-static-core';
import getMovieById from '../utils/getMovieById';
import getRandomMovies from '../utils/getRandomMovies';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/api/movies/':
     *  get:
     *    tags:
     *    - Movies
     *    summary: Returns a random array of ids
     *    parameters:
     *    - in: query
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
    app.get('/movies', (req, res) => {
        const { qty = 10 } = req.query;
        const movies = getRandomMovies(Number(qty));

        return res.json(movies);
    });

    /**
     * @openapi
     * '/movies/{id}':
     *  get:
     *    tags:
     *    - Movies
     *    summary: Get movie by id
     *    parameters:
     *    - in: path
     *      name: id
     *      type: number
     *      required: true
     *    responses:
     *      '200':
     *        description: OK
     *        schema:
     *          $ref: '#/definitions/MockMovie'
     *      '404':
     *        description: Not Found
     *        schema:
     *          type: object
     *          properties:
     *            message:
     *              type: string
     *              example: Movie not found
     */
    app.get('/movies/:id', (req, res) => {
        const { id } = req.params;
        const movie = getMovieById(Number(id));

        if (movie === undefined) return res.status(404).send({ message: 'Movie not found' });

        res.json(movie);
    });
};
