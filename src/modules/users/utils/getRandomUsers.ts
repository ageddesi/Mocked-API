import User from '../consts/User';
import { faker } from '@faker-js/faker';

const getRandomUsers = (qty: number) => {
    const users: User[] = [];

    Array.from({ length: qty }).forEach(() => {
        users.push({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatarUrl: faker.image.avatar(),
            password: faker.internet.password(),
            birthDate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        });
    });

    return users;
};

export default getRandomUsers;
