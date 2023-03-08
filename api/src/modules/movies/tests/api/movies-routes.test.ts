import request from 'supertest';
import app from '../../../../../app';
import Movie from '../../consts/Movie';

describe('movies api endpoints', () => {
    describe('GET /movies/', () => {
        it('should return a movie', async () => {
            const response = await request(app).get(`/movies`);
            const movies: Movie[] = response.body;
            const movie: Movie = response.body[0];

            expect(movies.length).toBeGreaterThan(0);

            expect(movie).toHaveProperty('id');
            expect(movie).toHaveProperty('created');
            expect(movie).toHaveProperty('modified');
            expect(movie).toHaveProperty('title');
            expect(movie).toHaveProperty('url');
            expect(movie).toHaveProperty('IMDb_rating');
            expect(movie).toHaveProperty('runtime');
            expect(movie).toHaveProperty('year');
            expect(movie).toHaveProperty('genres');
            expect(movie).toHaveProperty('IMDb_votes');
            expect(movie).toHaveProperty('release_date');
            expect(movie).toHaveProperty('directors');
        });
    });

    describe('GET /movies/random', () => {
        it('should return a movie', async () => {
            const response = await request(app).get('/movies/random');
            const movie: Movie = response.body;

            expect(movie).toHaveProperty('id');
            expect(movie).toHaveProperty('created');
            expect(movie).toHaveProperty('modified');
            expect(movie).toHaveProperty('title');
            expect(movie).toHaveProperty('url');
            expect(movie).toHaveProperty('IMDb_rating');
            expect(movie).toHaveProperty('runtime');
            expect(movie).toHaveProperty('year');
            expect(movie).toHaveProperty('genres');
            expect(movie).toHaveProperty('IMDb_votes');
            expect(movie).toHaveProperty('release_date');
            expect(movie).toHaveProperty('directors');
        });
    });
});
