import { faker } from '@faker-js/faker';
import Animal from '../models/animal.types';

const animalSpecies = (type: Animal, qty: number): string[] => {
    const speciesList = [];

    // Get a list of random species
    for (let index = 0; index < qty; index++) {
        switch (type) {
            case Animal.Bear:
                speciesList.push(faker.animal.bear());
                break;
            case Animal.Bird:
                speciesList.push(faker.animal.bird());
                break;
            case Animal.Cat:
                speciesList.push(faker.animal.cat());
                break;
            case Animal.Cetecean:
                speciesList.push(faker.animal.cetacean());
                break;
            case Animal.Cow:
                speciesList.push(faker.animal.cow());
                break;
            case Animal.Crocodile:
                speciesList.push(faker.animal.crocodilia());
                break;
            case Animal.Dog:
                speciesList.push(faker.animal.dog());
                break;
            case Animal.Fish:
                speciesList.push(faker.animal.fish());
                break;
            case Animal.Horse:
                speciesList.push(faker.animal.horse());
                break;
            case Animal.Insect:
                speciesList.push(faker.animal.insect());
                break;
            case Animal.Lion:
                speciesList.push(faker.animal.lion());
                break;
            case Animal.Rabbit:
                speciesList.push(faker.animal.rabbit());
                break;
            case Animal.Rodent:
                speciesList.push(faker.animal.rodent());
                break;
            case Animal.Snake:
                speciesList.push(faker.animal.snake());
                break;
        }
    }

    return [...new Set(speciesList)];
};

export default animalSpecies;
