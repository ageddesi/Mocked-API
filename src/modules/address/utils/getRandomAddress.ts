import { faker } from '@faker-js/faker';
import Address from '../consts/Address';

const getRandomAddresses = (addressCount: number = 1, country: string = 'uk'): Address[] => {
    const addresses: Address[] = [];

    for (let index = 0; index < addressCount; index++) {
        addresses.push({
            houseNumber: faker.address.buildingNumber(),
            addressLine1: faker.address.secondaryAddress(),
            addressLine2: faker.address.street(),
            city: faker.address.cityName(),
            postcode: country !== 'usa' ? faker.address.zipCode() : null,
            zipcode: country === 'usa' ? faker.address.zipCode() : null,
            country,
        });
    }
    return addresses;
};

export default getRandomAddresses;
