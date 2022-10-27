import getRandomMovies from '../../utils/getRandomMovies';

describe('get random movies', () => {
    it('should return an array of movies', () => {
        const movies = getRandomMovies(5);

        expect(movies.length).toBeGreaterThan(0);

        expect(movies[0]).toHaveProperty('id');
        expect(movies[0]).toHaveProperty('created');
        expect(movies[0]).toHaveProperty('modified');
        expect(movies[0]).toHaveProperty('title');
        expect(movies[0]).toHaveProperty('url');
        expect(movies[0]).toHaveProperty('IMDb_rating');
        expect(movies[0]).toHaveProperty('runtime');
        expect(movies[0]).toHaveProperty('year');
        expect(movies[0]).toHaveProperty('genres');
        expect(movies[0]).toHaveProperty('IMDb_votes');
        expect(movies[0]).toHaveProperty('release_date');
        expect(movies[0]).toHaveProperty('directors');
    });
});
