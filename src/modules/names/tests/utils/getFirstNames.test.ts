import { faker } from '@faker-js/faker';
import getFirstNames from '../../utils/getFirstNames';

jest.mock('@faker-js/faker', () => ({
    faker: {
        name: {
            firstName: jest.fn().mockReturnValue('mockName'),
        },
    },
}));

describe('get random users', () => {
    it('should call the faker female firstname getter address if I pass in female ', () => {
        getFirstNames(1, 'female');
        expect(faker.name.firstName).toHaveBeenLastCalledWith('female');
    });

    it('should call the faker male firstname getter address if I pass in male', () => {
        getFirstNames(1, 'male');
        expect(faker.name.firstName).toHaveBeenLastCalledWith('male');
    });

    it('should call the faker  firstname getter address if I pass in nothing ', () => {
        getFirstNames(1);
        expect(faker.name.firstName).toHaveBeenLastCalledWith();
    });

    it('should return me the correct amount of names I requested', () => {
        const res = getFirstNames(5);
        expect(res.length).toBe(5);
    });
});
