import { faker } from '@faker-js/faker';

const getElement = () => {
    return faker.science.chemicalElement();
};

export { getElement };
