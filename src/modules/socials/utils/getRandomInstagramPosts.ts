import { faker } from '@faker-js/faker';
import Instagram from '../consts/Instagram';

const generateValidInstagramUsername = () => {
    return faker.internet
        .userName()
        .replace(/[^a-zA-Z0-9_.]/g, '')
        .toLowerCase();
};

export const getRandomInstagramPosts = (postCount: number): Instagram[] => {
    const instagramPosts: Instagram[] = [];

    Array.from({ length: postCount }).forEach(() => {
        const commentCount = faker.datatype.number({ min: 0, max: 50 });
        const likeCount = faker.datatype.number({ min: 0, max: 100 });
        const defaultImageSize = 1080; // 1080x1080 is the optimal image size for Instagram

        instagramPosts.push({
            id: faker.datatype.uuid(),
            commentCount,
            caption: faker.lorem.paragraph(),
            createdAt: faker.date.past(),
            imageUrl: faker.image.unsplash.imageUrl(defaultImageSize, defaultImageSize), // unsplash has a lot of high quality images
            width: defaultImageSize,
            height: defaultImageSize,
            likeCount,
            accessibilityCaption: faker.lorem.sentence(),
            location: {
                lat: Number(faker.address.latitude()),
                lng: Number(faker.address.longitude()),
                name: faker.address.cityName(),
            },
            user: {
                username: generateValidInstagramUsername(),
                id: faker.datatype.uuid(),
                fullName: faker.name.fullName(),
                profilePicture: faker.image.avatar(),
                isVerified: faker.datatype.boolean(),
            },
            comments: Array.from({ length: commentCount }).map(() => ({
                id: faker.datatype.uuid(),
                text: faker.lorem.paragraph(),
                createdAt: faker.date.recent(faker.datatype.number({ min: 0, max: 30 })),
                likeCount: faker.datatype.number({ min: 0, max: 100 }),
                user: {
                    id: faker.datatype.uuid(),
                    username: generateValidInstagramUsername(),
                    fullName: faker.name.fullName(),
                    profilePicture: faker.image.avatar(),
                    isVerified: faker.datatype.boolean(),
                },
            })),
            likes: Array.from({ length: likeCount }).map(() => ({
                id: faker.datatype.uuid(),
                fullName: faker.name.fullName(),
                createdAt: faker.date.recent(faker.datatype.number({ min: 0, max: 30 })),
                username: generateValidInstagramUsername(),
                isVerified: faker.datatype.boolean(),
                profilePicture: faker.image.avatar(),
            })),
        });
    });

    return instagramPosts;
};
