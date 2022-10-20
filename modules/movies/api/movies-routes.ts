import * as core from 'express-serve-static-core';
import getMovieById from '../utils/getMovieById';
import getRandomMovies from '../utils/getRandomMovies';

module.exports = function (app: core.Express) {
    app.get('/movies', (req, res) => {
        const { qty = 10 } = req.query;
        const movies = getRandomMovies(Number(qty));

        return res.json(movies);
    });

    app.get('/movies/:id', (req, res) => {
        const { id } = req.params;
        const movie = getMovieById(Number(id));

        if (movie === undefined) return res.status(404).send({ message: 'Movie not found' });

        res.json(movie);
    });
};
