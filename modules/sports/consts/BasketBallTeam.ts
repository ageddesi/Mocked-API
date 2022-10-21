/**
 * @openapi
 * definitions:
 *   MockBasketBallTeams:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         abbr:
 *           type: string
 *           example: CHI
 *         conference:
 *           type: string
 *           example: Eastern
 *         division:
 *           type: string
 *           example: Central
 *         city:
 *           type: string
 *           example: Chicago
 *         name:
 *           type: string
 *           example: Bulls
 *         color:
 *           type: string
 *           example: 061922
 *         colors:
 *           type: array
 *           items:
 *             type: string
 *             example: 061922
 */
type BasketBallTeam = {
    abbr: string;
    conference: string;
    division: string;
    city: string;
    name: string;
    color: string;
    colors: string[];
};

export default BasketBallTeam;
