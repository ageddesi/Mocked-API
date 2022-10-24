import User from '../../users/consts/User';
import ChatMessage from './chat-message.types';
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
