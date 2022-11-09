import { faker } from '@faker-js/faker';
import getFullNames from '../../utils/getFullNames';

jest.mock('@faker-js/faker', () => ({
    faker: {
        name: {
            fullName: jest.fn().mockReturnValue('mockName'),
        },
    },
}));

describe('get full names', () => {
    it('should call the faker female fullName getter if I pass in female ', () => {
        getFullNames(1, 'female');
        expect(faker.name.fullName).toHaveBeenLastCalledWith({ sex: 'female' });
    });

    it('should call the faker male fullName getter if I pass in male', () => {
        getFullNames(1, 'male');
        expect(faker.name.fullName).toHaveBeenLastCalledWith({ sex: 'male' });
    });

    it('should call the faker fullName getter if I pass in nothing ', () => {
        getFullNames(1);
        expect(faker.name.fullName).toHaveBeenLastCalledWith();
    });

    it('should return me the correct amount of names I requested', () => {
        const res = getFullNames(5);
        expect(res.length).toBe(5);
    });
});
