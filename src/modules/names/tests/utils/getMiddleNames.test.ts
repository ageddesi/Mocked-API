import { faker } from '@faker-js/faker';
import getMiddleNames from '../../utils/getMiddleNames';

jest.mock('@faker-js/faker', () => ({
    faker: {
        name: {
            middleName: jest.fn().mockReturnValue('mockName'),
        },
    },
}));

describe('get full names', () => {
    it('should call the faker female middleName getter if I pass in female ', () => {
        getMiddleNames(1, 'female');
        expect(faker.name.middleName).toHaveBeenLastCalledWith('female');
    });

    it('should call the faker male middleName getter if I pass in male', () => {
        getMiddleNames(1, 'male');
        expect(faker.name.middleName).toHaveBeenLastCalledWith('male');
    });

    it('should call the faker middleName getter if I pass in nothing ', () => {
        getMiddleNames(1);
        expect(faker.name.middleName).toHaveBeenLastCalledWith();
    });

    it('should return me the correct amount of names I requested', () => {
        const res = getMiddleNames(5);
        expect(res.length).toBe(5);
    });
});
