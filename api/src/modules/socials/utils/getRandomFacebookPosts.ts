import { faker } from '@faker-js/faker';
import Facebook from '../consts/Facebook';

export const getRandomFacebookPosts = (postCount: number): Facebook[] => {
    const facebookPosts: Facebook[] = [];
    Array.from({ length: postCount }).forEach(() => {
        facebookPosts.push({
            id: faker.datatype.uuid(),
            comments: faker.datatype.number(),
            content: faker.lorem.sentence(),
            media: faker.image.imageUrl(),
            createdAt: faker.date.recent(),
            createdUserEmail: faker.internet.email(),
            createdUserName: faker.word.noun(10),
            shares: faker.datatype.number(),
            reactions: {
                angry: faker.datatype.number(),
                haha: faker.datatype.number(),
                like: faker.datatype.number(),
                love: faker.datatype.number(),
                sad: faker.datatype.number(),
                wow: faker.datatype.number(),
            },
        });
    });
    return facebookPosts;
};
