/**
 * @openapi
 * definitions:
 *   FacebookPost:
 *       type: object
 *       properties:
 *         id:
 *           type: uuid
 *           example: e69ccf52-22a8-49f6-93e9-c7dfa835c162
 *         createdUserName:
 *           type: string
 *           example: name
 *         createdUserEmail:
 *           type: string
 *           example: example@example.com
 *         content:
 *           type: string
 *           example: example text
 *         media:
 *           type: string
 *           example: example media
 *         shares:
 *           type: number
 *           example: 1
 *         comments:
 *           type: number
 *           example: 1
 *         createdAt:
 *           type: date
 *           example: '2022-06-22T00:01:21.497Z'
 *         reactions:
 *           type: object
 *           properties:
 *            like:
 *              type: number
 *              example: 10
 *            love:
 *              type: number
 *              example: 10
 *            wow:
 *              type: number
 *              example: 10
 *            haha:
 *              type: number
 *              example: 10
 *            sad:
 *              type: number
 *              example: 10
 *            angry:
 *              type: number
 *              example: 10
 */

type Facebook = {
    id: string;
    createdUserName: string;
    createdUserEmail: string;
    content: string;
    media: string;
    reactions: {
        like: number;
        love: number;
        wow: number;
        haha: number;
        sad: number;
        angry: number;
    };
    shares: number;
    comments: number;
    createdAt: Date;
};

export default Facebook;
