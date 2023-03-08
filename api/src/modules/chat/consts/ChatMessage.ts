/**
 * @openapi
 * definitions:
 *   MockChatMessages:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: dc90af0e-f073-45e7-8a77-69e7e94aed31
 *         createdAt:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         message:
 *           type: string
 *           example: Dicta amet dolores mollitia eveniet commodi.
 *         userId:
 *           type: string
 *           example: d392a495-3f4c-4660-a896-dce057afbbd4
 */
type ChatMessage = {
    id: String;
    createdAt: String;
    message: String;
    userId: String;
};

export default ChatMessage;
