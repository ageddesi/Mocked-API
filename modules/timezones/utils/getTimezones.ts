import { faker } from '@faker-js/faker';

const getTimezones = () => {
    return faker.address.timeZone();
};

export { getTimezones };
