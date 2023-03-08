import Movie from '../consts/Movie';
import movies from '../data/movies';

const getMovieById = (id: number): Movie => {
    return movies.find((movie) => movie.id === id);
};

export default getMovieById;
