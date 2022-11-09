import { faker } from '@faker-js/faker';

const getLastNames = (qty: number, sex: string = 'both'): string[] => {
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        switch (sex) {
            case 'female':
                namesList.push(faker.name.lastName('female'));
                break;
            case 'male':
                namesList.push(faker.name.lastName('male'));
                break;
            default:
                namesList.push(faker.name.lastName());
                break;
        }
    }

    return namesList;
};

export default getLastNames;
