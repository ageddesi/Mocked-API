import { faker } from '@faker-js/faker';
import { getRandomArrayItem } from '../../../utils/arrays';

const messageProviders: Array<() => string> = [faker.lorem.sentence, faker.lorem.word, faker.lorem.paragraph];

export const generateRandomMessage = (): string => {
    return getRandomArrayItem(messageProviders)();
};
