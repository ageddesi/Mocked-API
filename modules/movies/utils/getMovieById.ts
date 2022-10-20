import movies from "../data/movies";

const getMovieById = (id: number) => {
    return movies.find(movie => movie.id === id);
}

export default getMovieById;