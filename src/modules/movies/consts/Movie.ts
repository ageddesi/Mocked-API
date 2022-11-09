/**
 * @openapi
 * definitions:
 *  MockMovie:
 *   type: object
 *   properties:
 *    id:
 *      type: number
 *      example: 1
 *    created:
 *      type: string
 *      example: 2019-01-01
 *    modified:
 *      type: string
 *      example: 2019-08-03
 *    title:
 *      type: string
 *      example: 'The Shawshank Redemption'
 *    url:
 *      type: string
 *      example: 'https://www.imdb.com/title/tt0111161/'
 *    IMDb_rating:
 *      type: number
 *      example: 9.3
 *    runtime:
 *      type: number
 *      example: 142
 *    year:
 *      type: number
 *      example: 1994
 *    genres:
 *      type: string
 *      example: 'Drama, Crime'
 *    IMDb_votes:
 *      type: number
 *      example: 2_223_000
 *    release_date:
 *      type: string
 *      example: '1994-09-23'
 *    directors:
 *      type: string
 *      example: 'Frank Darabont'
 *
 *
 */
type Movie = {
    id: number;
    created: string;
    modified: string;
    title: string;
    url: string;
    IMDb_rating: number;
    runtime: number;
    year: number;
    genres: string;
    IMDb_votes: number;
    release_date: string;
    directors: string;
};

export default Movie;
