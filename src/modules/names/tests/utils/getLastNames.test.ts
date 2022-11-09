import { faker } from '@faker-js/faker';
import getLastName from '../../utils/getLastNames';

jest.mock('@faker-js/faker', () => ({
    faker: {
        name: {
            lastName: jest.fn().mockReturnValue('mockName'),
        },
    },
}));

describe('get full names', () => {
    it('should call the faker female lastName getter if I pass in female ', () => {
        getLastName(1, 'female');
        expect(faker.name.lastName).toHaveBeenLastCalledWith('female');
    });

    it('should call the faker male lastName getter if I pass in male', () => {
        getLastName(1, 'male');
        expect(faker.name.lastName).toHaveBeenLastCalledWith('male');
    });

    it('should call the faker lastName getter if I pass in nothing ', () => {
        getLastName(1);
        expect(faker.name.lastName).toHaveBeenLastCalledWith();
    });

    it('should return me the correct amount of names I requested', () => {
        const res = getLastName(5);
        expect(res.length).toBe(5);
    });
});
