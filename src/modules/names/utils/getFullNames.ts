import { faker } from '@faker-js/faker';

const getFullNames = (qty: number, sex: string = 'both'): string[] => {
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        switch (sex) {
            case 'female':
                namesList.push(faker.name.fullName({ sex: 'female' }));
                break;
            case 'male':
                namesList.push(faker.name.fullName({ sex: 'male' }));
                break;
            default:
                namesList.push(faker.name.fullName());
                break;
        }
    }

    return namesList;
};

export default getFullNames;
