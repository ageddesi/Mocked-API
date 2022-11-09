import { faker } from '@faker-js/faker';

const getMiddleNames = (qty: number, sex: string = 'both'): string[] => {
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        switch (sex) {
            case 'female':
                namesList.push(faker.name.middleName('female'));
                break;
            case 'male':
                namesList.push(faker.name.middleName('male'));
                break;
            default:
                namesList.push(faker.name.middleName());
                break;
        }
    }

    return namesList;
};

export default getMiddleNames;
