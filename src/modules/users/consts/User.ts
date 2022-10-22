/**
 * @openapi
 * definitions:
 *   MockUsers:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           example: d392a495-3f4c-4660-a896-dce057afbbd4
 *         username:
 *           type: string
 *           example: Aaron Rackley
 *         email:
 *           type: string
 *           example: john.doe@example.com
 *         avatarUrl:
 *           type: string
 *           example: https://cloudflare-ipfs.com/ipfs/Qmd  3W5hgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg
 *         password:
 *           type: string
 *           example: password
 *         birthDate:
 *           type: string
 *           example: '1984-05-21T00:02:11.497Z'
 *         registeredAt:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 */
type User = {
    userId: string;
    username: string;
    email: string;
    avatarUrl: string;
    password: string;
    birthDate: Date;
    registeredAt: Date;
};

export default User;
