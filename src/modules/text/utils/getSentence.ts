import { faker } from '@faker-js/faker';

const getSentence = (qty: Number) => {
    const lines: string[] = [];

    for (let index = 0; index < qty; index++) {
        lines.push(faker.lorem.sentence());
    }

    return lines;
};

export default getSentence;
