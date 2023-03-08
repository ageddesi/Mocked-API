import { faker } from '@faker-js/faker';
import getRandomUsers from '../../users/utils/getRandomUsers';
import ChatMessage from '../consts/ChatMessage';
import ChatRandomResponse from '../consts/ChatRandomResponse';
import { generateRandomMessage } from './generateRandomMessage';

export const getRandomChat = (
    userCount: number,
    messageCount: number,
    various: boolean = false
): ChatRandomResponse => {
    const users = getRandomUsers(userCount);

    const messages: ChatMessage[] = [];
    Array.from({ length: messageCount }).forEach(() => {
        messages.push({
            id: faker.datatype.uuid(),
            createdAt: faker.date.recent(faker.datatype.number({ min: 0, max: 30 })).toISOString(),
            message: various ? generateRandomMessage() : faker.lorem.sentence(),
            userId: users[faker.datatype.number({ min: 0, max: userCount - 1 })].userId,
        });
    });
    return {
        users,
        messages,
    };
};
