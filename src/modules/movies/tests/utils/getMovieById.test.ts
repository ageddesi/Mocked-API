import getMovieById from '../../utils/getMovieById';

describe('get movie by id', () => {
    it('should return a movie', () => {
        const movie = getMovieById(1);

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
