import User from '../../users/consts/User';
import ChatMessage from './ChatMessage';
/**
 * @openapi
 * definitions:
 *   MockChatResponse:
 *     type: object
 *     properties:
 *       users:
 *         $ref: '#/definitions/MockUsers'
 *       messages:
 *         $ref: '#/definitions/MockChatMessages'
 */
type ChatRandomResponse = {
    users: User[];
    messages: ChatMessage[];
};

export default ChatRandomResponse;
