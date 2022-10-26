import { faker } from '@faker-js/faker';

const getFirstNames = (qty: number, sex: string = 'both'): string[] => {
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        switch (sex) {
            case 'female':
                namesList.push(faker.name.firstName('female'));
                break;
            case 'male':
                namesList.push(faker.name.firstName('male'));
                break;
            default:
                namesList.push(faker.name.firstName());
                break;
        }
    }

    return namesList;
};

export default getFirstNames;
