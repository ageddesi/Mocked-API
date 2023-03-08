import { faker } from '@faker-js/faker';

const getTextLines = (qty: Number) => {
    const lines: string[] = [];

    for (let index = 0; index < qty; index++) {
        lines.push(faker.lorem.lines(1));
    }

    return lines;
};

export default getTextLines;
