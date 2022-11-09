import { faker } from '@faker-js/faker';
import AnimalType from '../consts/AnimalEnum';

const getSpeciesOfAnimal = (type: AnimalType, qty: number): string[] => {
    const speciesList = [];

    // Get a list of random species
    for (let index = 0; index < qty; index++) {
        switch (type) {
            case AnimalType.Bear:
                speciesList.push(faker.animal.bear());
                break;
            case AnimalType.Bird:
                speciesList.push(faker.animal.bird());
                break;
            case AnimalType.Cat:
                speciesList.push(faker.animal.cat());
                break;
            case AnimalType.Cetecean:
                speciesList.push(faker.animal.cetacean());
                break;
            case AnimalType.Cow:
                speciesList.push(faker.animal.cow());
                break;
            case AnimalType.Crocodile:
                speciesList.push(faker.animal.crocodilia());
                break;
            case AnimalType.Dog:
                speciesList.push(faker.animal.dog());
                break;
            case AnimalType.Fish:
                speciesList.push(faker.animal.fish());
                break;
            case AnimalType.Horse:
                speciesList.push(faker.animal.horse());
                break;
            case AnimalType.Insect:
                speciesList.push(faker.animal.insect());
                break;
            case AnimalType.Lion:
                speciesList.push(faker.animal.lion());
                break;
            case AnimalType.Rabbit:
                speciesList.push(faker.animal.rabbit());
                break;
            case AnimalType.Rodent:
                speciesList.push(faker.animal.rodent());
                break;
            case AnimalType.Snake:
                speciesList.push(faker.animal.snake());
                break;
        }
    }

    return [...new Set(speciesList)];
};

export default getSpeciesOfAnimal;
