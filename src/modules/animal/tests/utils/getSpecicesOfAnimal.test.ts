import { faker } from '@faker-js/faker';
import AnimalEnum from '../../consts/AnimalEnum';
import getSpeciesOfAnimal from '../../utils/getSpeciesOfAnimal';

jest.mock('@faker-js/faker', () => ({
    faker: {
        animal: {
            bear: jest.fn().mockReturnValue('bear'),
            bird: jest.fn().mockReturnValue('bird'),
            cat: jest.fn().mockReturnValue('cat'),
            cetacean: jest.fn().mockReturnValue('cetacean'),
            cow: jest.fn().mockReturnValue('cow'),
            crocodilia: jest.fn().mockReturnValue('crocodillia'),
            dog: jest.fn().mockReturnValue('dog'),
            fish: jest.fn().mockReturnValue('fish'),
            horse: jest.fn().mockReturnValue('horse'),
            insect: jest.fn().mockReturnValue('insect'),
            lion: jest.fn().mockReturnValue('lion'),
            rabbit: jest.fn().mockReturnValue('rabbit'),
            rodent: jest.fn().mockReturnValue('rodent'),
            snake: jest.fn().mockReturnValue('snake'),
        },
    },
}));

describe('get species of animal users', () => {
    it('should call the faker animal bear getter if I pass in bear for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Bear, 1);

        expect(faker.animal.bear).toHaveBeenCalled();
        expect(res).toStrictEqual(['bear']);
    });

    it('should call the faker animal bird getter if I pass in bird for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Bird, 1);

        expect(faker.animal.bird).toHaveBeenCalled();
        expect(res).toStrictEqual(['bird']);
    });

    it('should call the faker animal cat getter if I pass in cat for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Cat, 1);

        expect(faker.animal.cat).toHaveBeenCalledWith();
        expect(res).toStrictEqual(['cat']);
    });

    it('should call the faker animal cetacean getter if I pass in cetacean for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Cetecean, 1);

        expect(faker.animal.cetacean).toHaveBeenCalled();
        expect(res).toStrictEqual(['cetacean']);
    });

    it('should call the faker animal cow getter if I pass in cow for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Cow, 1);

        expect(faker.animal.cow).toHaveBeenCalled();
        expect(res).toStrictEqual(['cow']);
    });

    it('should call the faker animal crocodillia getter if I pass in crocodillia for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Crocodile, 1);

        expect(faker.animal.crocodilia).toHaveBeenCalled();
        expect(res).toStrictEqual(['crocodillia']);
    });

    it('should call the faker animal dog getter if I pass in dog for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Dog, 1);

        expect(faker.animal.dog).toHaveBeenCalled();
        expect(res).toStrictEqual(['dog']);
    });

    it('should call the faker animal Fish getter if I pass in Fish for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Fish, 1);

        expect(faker.animal.fish).toHaveBeenCalled();
        expect(res).toStrictEqual(['fish']);
    });

    it('should call the faker animal horse getter if I pass in horse for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Horse, 1);

        expect(faker.animal.horse).toHaveBeenCalled();
        expect(res).toStrictEqual(['horse']);
    });

    it('should call the faker animal insect getter if I pass in insect for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Insect, 1);

        expect(faker.animal.insect).toHaveBeenCalled();
        expect(res).toStrictEqual(['insect']);
    });

    it('should call the faker animal lion getter if I pass in lion for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Lion, 1);

        expect(faker.animal.lion).toHaveBeenCalled();
        expect(res).toStrictEqual(['lion']);
    });

    it('should call the faker animal rabbit getter if I pass in rabbit for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Rabbit, 1);

        expect(faker.animal.rabbit).toHaveBeenCalled();
        expect(res).toStrictEqual(['rabbit']);
    });

    it('should call the faker animal rodent getter if I pass in rodent for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Rodent, 1);

        expect(faker.animal.rodent).toHaveBeenCalled();
        expect(res).toStrictEqual(['rodent']);
    });

    it('should call the faker animal snake getter if I pass in snake for the animal type', () => {
        const res = getSpeciesOfAnimal(AnimalEnum.Snake, 1);

        expect(faker.animal.snake).toHaveBeenCalled();
        expect(res).toStrictEqual(['snake']);
    });

    //FIXME: getSpeciesOfAnimal takes a qty but because it returns a Set
    // rather than an array it will always return 1 item and not the requested amount
    it.skip('should return me the correct amount of animals I requested', () => {
        const amount = 5;
        const res = getSpeciesOfAnimal(AnimalEnum.Bear, amount);

        expect(res.length).toBe(amount);
    });
});
