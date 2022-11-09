import { getRandomEmails } from '../../utils/getRandomEmails';
import Email from '../../consts/Email';
import { faker } from '@faker-js/faker';

jest.mock('@faker-js/faker', () => ({
    faker: {
        datatype: {
            uuid: jest.fn().mockReturnValue('uuid'),
            boolean: jest.fn().mockReturnValue(true),
            number: jest.fn().mockReturnValue(0),
        },
        internet: {
            email: jest.fn().mockReturnValue('email'),
        },
        lorem: {
            sentence: jest.fn().mockReturnValue('sentence'),
            paragraphs: jest.fn().mockReturnValue('paragraphs'),
            word: jest.fn().mockReturnValue('word'),
        },
        date: {
            recent: jest.fn().mockReturnValue('recent'),
        },
    },
}));

describe('get random emails', () => {
    it('should return an array of emails', () => {
        const res = getRandomEmails(1);

        expect(faker.datatype.uuid).toHaveBeenCalled();
        expect(faker.internet.email).toHaveBeenCalled();
        expect(faker.lorem.sentence).toHaveBeenCalled();
        expect(faker.lorem.paragraphs).toHaveBeenCalled();
        expect(faker.datatype.boolean).toHaveBeenCalled();
        expect(faker.lorem.word).toHaveBeenCalled();
        expect(faker.date.recent).toHaveBeenCalled();
        expect(res).toStrictEqual([
            {
                id: 'uuid',
                from: 'email',
                subject: 'sentence',
                body: 'paragraphs',
                read: true,
                tags: ['word', 'word', 'word'],
                date: 'recent',
            },
        ]);
    });
});
