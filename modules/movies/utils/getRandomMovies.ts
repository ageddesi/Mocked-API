import movies from "../data/movies";

const getRandomMovies = (qty: number) => {
    return movies.sort(() => Math.random() - 0.5).slice(0, qty);
}

export default getRandomMovies;