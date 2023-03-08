import { faker } from '@faker-js/faker';

const getParagraphs = (qty: Number) => {
    const lines: string[] = [];

    for (let index = 0; index < qty; index++) {
        lines.push(faker.lorem.paragraph(3));
    }

    return lines;
};

export default getParagraphs;
