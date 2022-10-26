/**
 * @openapi
 * definitions:
 *   MockNews:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: 'Bitcoin: Breaking Up Money and State'
 *         slug:
 *           type: string
 *           example: Bitcoin:-Breaking-Up-Money-and-State
 *         summary:
 *           type: string
 *           example: 'The only drink I will ever need'
 *         category:
 *           type: string
 *           example: 'AI'
 *         language:
 *           type: string
 *           example: en
 *         publishedDate:
 *           type: string
 *           example: '1984-05-21 00:02:11'
 *         author:
 *           type: string
 *           example: sport-drinks
 */
interface INews {
    title: string;
    slug: string;
    author: string;
    published_date: string;
    summary: string;
    language: string;
    category: string;
}

export { INews };
