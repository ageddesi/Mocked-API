import Course from '../consts/course';
import coursesListPrefix from '../data/courses-name';
import { faker } from '@faker-js/faker';

/**
 * Replace spaces, and convert to lowercase...
 * @param value
 * @param replaceValue
 * @returns
 */
const scrub = (value: string, replaceValue: string = '') => {
    return value.replace(/\s/g, replaceValue).toLocaleLowerCase();
};

const getRandomCourses = (qty: number) => {
    const courses: Course[] = [];

    Array.from({ length: qty }).forEach(() => {
        const courseType = faker.helpers.arrayElement(['virtual', 'physical']);
        const companyName = faker.company.name();

        const companyBs = faker.company.bs();
        const courseName = `${faker.helpers.arrayElement(coursesListPrefix)} ${
            companyBs.charAt(0).toUpperCase() + companyBs.substring(1)
        }`;
        const courseURL = `${scrub(companyName)}.com/${scrub(courseName, '-')}`;

        const courseAddress =
            courseType === 'physical'
                ? `${faker.address.secondaryAddress()}, ${faker.address.street()}, ${faker.address.cityName()}`
                : null;

        courses.push({
            name: courseName,
            description: faker.lorem.paragraph(),
            provider: companyName,
            url: courseURL,
            type: courseType,
            price: faker.finance.amount(5, 100, 2, '$'),
            address: courseAddress,
        });
    });

    return courses;
};

export default getRandomCourses;
