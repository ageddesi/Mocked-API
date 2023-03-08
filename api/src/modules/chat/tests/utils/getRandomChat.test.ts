import { getRandomChat } from '../../utils/getRandomChat';

describe('get random chat', () => {
    it('should return a chat with the amount of messages specified', () => {
        const chatCount = 20;
        const res = getRandomChat(2, chatCount);

        expect(res.messages.length).toBe(chatCount);
    });
});
