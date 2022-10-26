import { faker } from '@faker-js/faker';
import Email from '../consts/Email';

export const getRandomEmails = (emailCount: number): Email[] => {
    const emails: Email[] = [];
    Array.from({ length: emailCount }).forEach(() => {
        emails.push({
            id: faker.datatype.uuid(),
            from: faker.internet.email(),
            subject: faker.lorem.sentence(),
            body: faker.lorem.paragraphs(),
            read: faker.datatype.boolean(),
            tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
            date: faker.date.recent(faker.datatype.number({ min: 0, max: 30 })),
        });
    });
    return emails;
};
