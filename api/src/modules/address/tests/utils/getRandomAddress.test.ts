// jest test for getRandomAddresses which returns a random UK/USA format address

import getRandomAddresses from '../../utils/getRandomAddress';
import { faker } from '@faker-js/faker';

jest.mock('@faker-js/faker', () => ({
    faker: {
        address: {
            buildingNumber: jest.fn().mockReturnValue('10'),
            secondaryAddress: jest.fn().mockReturnValue('Flat 1'),
            street: jest.fn().mockReturnValue('Something Road'),
            cityName: jest.fn().mockReturnValue('Lahore'),
            zipCode: jest.fn().mockReturnValue('2344'),
        },
    },
}));

describe('getRandomAddresses', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return a random USA address by default', () => {
        const address = getRandomAddresses();
        expect(faker.address.buildingNumber).toHaveBeenCalledTimes(1);
        expect(faker.address.secondaryAddress).toHaveBeenCalledTimes(1);
        expect(faker.address.street).toHaveBeenCalledTimes(1);
        expect(faker.address.cityName).toHaveBeenCalledTimes(1);
        expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
    });

    it('should return a random UK address when passed the "uk" argument', () => {
        const address = getRandomAddresses(1, 'uk');
        expect(faker.address.buildingNumber).toHaveBeenCalledTimes(1);
        expect(faker.address.secondaryAddress).toHaveBeenCalledTimes(1);
        expect(faker.address.street).toHaveBeenCalledTimes(1);
        expect(faker.address.cityName).toHaveBeenCalledTimes(1);
        expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
    });

    it('should return a random USA address when passed the "usa" argument', () => {
        const address = getRandomAddresses(1, 'usa');
        expect(faker.address.buildingNumber).toHaveBeenCalledTimes(1);
        expect(faker.address.secondaryAddress).toHaveBeenCalledTimes(1);
        expect(faker.address.street).toHaveBeenCalledTimes(1);
        expect(faker.address.cityName).toHaveBeenCalledTimes(1);
        expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
    });

    it('should return USA format addresses equal to the number provided as "addressCount" parameter', () => {
        const address = getRandomAddresses(5, 'usa');
        expect(faker.address.buildingNumber).toHaveBeenCalledTimes(5);
        expect(faker.address.secondaryAddress).toHaveBeenCalledTimes(5);
        expect(faker.address.street).toHaveBeenCalledTimes(5);
        expect(faker.address.cityName).toHaveBeenCalledTimes(5);
        expect(faker.address.zipCode).toHaveBeenCalledTimes(5);
    });

    it('should return UK format addresses equal to the number provided as "addressCount" parameter', () => {
        const address = getRandomAddresses(3, 'uk');
        expect(faker.address.buildingNumber).toHaveBeenCalledTimes(3);
        expect(faker.address.secondaryAddress).toHaveBeenCalledTimes(3);
        expect(faker.address.street).toHaveBeenCalledTimes(3);
        expect(faker.address.cityName).toHaveBeenCalledTimes(3);
        expect(faker.address.zipCode).toHaveBeenCalledTimes(3);
    });
});
