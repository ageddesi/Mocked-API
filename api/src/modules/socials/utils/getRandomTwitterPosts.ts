import { faker } from '@faker-js/faker';
import Twitter from '../consts/Twitter';

export const getRandomTwitterPosts = (postCount: number): Twitter[] => {
    const twitterPosts: Twitter[] = [];
    Array.from({ length: postCount }).forEach(() => {
        twitterPosts.push({
            id: faker.datatype.uuid(),
            handle: `@${faker.internet.userName()}`,
            message: faker.lorem.sentence(),
            media: faker.image.imageUrl(),
            likes: faker.datatype.number({ min: 0, max: 1000 }),
            comments: faker.datatype.number({ min: 0, max: 1000 }),
            retweets: faker.datatype.number({ min: 0, max: 1000 }),
            date: faker.date.recent(faker.datatype.number({ min: 0, max: 30 })),
        });
    });
    return twitterPosts;
};
