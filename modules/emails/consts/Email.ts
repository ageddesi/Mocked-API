/**
 * @openapi
 * definitions:
 *   MockEmails:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: dc90af0e-f073-45e7-8a77-69e7e94aed31
 *         from:
 *           type: string
 *           example: john.doe@example.com
 *         subject:
 *           type: string
 *           example: Lorem ipsum dolor
 *         body:
 *           type: string
 *           example: Dicta amet dolores mollitia eveniet commodi.
 *         read:
 *           type: boolean
 *           example: false
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *             example: important
 *         date:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 */
type Email = {
    id: string;
    from: string;
    subject: string;
    body: string;
    read: boolean;
    tags: string[];
    date: Date;
};

export default Email;
