import getImageUrls from '../../utils/getImageUrls';
import { faker } from '@faker-js/faker';
import ImageDataType from '../../consts/imageDataType';
import ImageEnum from '../../consts/ImageEnum';

jest.mock('@faker-js/faker', () => ({
    faker: {
        image: {
            abstract: jest.fn().mockReturnValue('abstract image'),
            animals: jest.fn().mockReturnValue('animals image'),
            avatar: jest.fn().mockReturnValue('avatar image'),
            business: jest.fn().mockReturnValue('business image'),
            cats: jest.fn().mockReturnValue('cats image'),
            city: jest.fn().mockReturnValue('city image'),
            fashion: jest.fn().mockReturnValue('fashion image'),
            food: jest.fn().mockReturnValue('food image'),
            nature: jest.fn().mockReturnValue('nature image'),
            nightlife: jest.fn().mockReturnValue('nightlife image'),
            people: jest.fn().mockReturnValue('people image'),
            sports: jest.fn().mockReturnValue('sports image'),
            technics: jest.fn().mockReturnValue('technics image'),
            transport: jest.fn().mockReturnValue('transport image'),
        },
    },
}));

const data: ImageDataType = {
    Height: 100,
    Qty: 1,
    Width: 100,
};

describe('get random users', () => {
    it('should call the faker image abstract getter if I pass in abstract for the image type', () => {
        const res = getImageUrls(ImageEnum.Abstract, data);

        expect(faker.image.abstract).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['abstract image']);
    });

    it('should call the faker image animals getter if I pass in animals for the image type', () => {
        const res = getImageUrls(ImageEnum.Animals, data);

        expect(faker.image.animals).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['animals image']);
    });

    //FIXME: avatar should be called with the correct args
    it.skip('should call the faker image avatar getter if I pass in avatar for the image type', () => {
        const res = getImageUrls(ImageEnum.Avatar, data);

        expect(faker.image.avatar).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['avatar image']);
    });

    it('should call the faker image business getter if I pass in business for the image type', () => {
        const res = getImageUrls(ImageEnum.Business, data);

        expect(faker.image.business).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['business image']);
    });

    it('should call the faker image cats getter if I pass in cats for the image type', () => {
        const res = getImageUrls(ImageEnum.Cats, data);

        expect(faker.image.cats).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['cats image']);
    });

    it('should call the faker image city getter if I pass in city for the image type', () => {
        const res = getImageUrls(ImageEnum.City, data);

        expect(faker.image.city).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['city image']);
    });

    it('should call the faker image fashion getter if I pass in fashion for the image type', () => {
        const res = getImageUrls(ImageEnum.Fashion, data);

        expect(faker.image.fashion).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['fashion image']);
    });

    it('should call the faker image food getter if I pass in food for the image type', () => {
        const res = getImageUrls(ImageEnum.Food, data);

        expect(faker.image.food).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['food image']);
    });

    it('should call the faker image Nature getter if I pass in Nature for the image type', () => {
        const res = getImageUrls(ImageEnum.Nature, data);

        expect(faker.image.nature).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['nature image']);
    });

    it('should call the faker image nightlife getter if I pass in nightlife for the image type', () => {
        const res = getImageUrls(ImageEnum.Nightlife, data);

        expect(faker.image.nightlife).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['nightlife image']);
    });

    it('should call the faker image people getter if I pass in people for the image type', () => {
        const res = getImageUrls(ImageEnum.People, data);

        expect(faker.image.people).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['people image']);
    });

    it('should call the faker image sports getter if I pass in sports for the image type', () => {
        const res = getImageUrls(ImageEnum.Sports, data);

        expect(faker.image.sports).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['sports image']);
    });

    it('should call the faker image technics getter if I pass in technics for the image type', () => {
        const res = getImageUrls(ImageEnum.Technics, data);

        expect(faker.image.technics).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['technics image']);
    });

    it('should call the faker image transport getter if I pass in transport for the image type', () => {
        const res = getImageUrls(ImageEnum.Transport, data);

        expect(faker.image.transport).toHaveBeenCalledWith(data.Width, data.Height, true);
        expect(res).toStrictEqual(['transport image']);
    });

    it('should return me the correct amount of images I requested', () => {
        const res = getImageUrls(ImageEnum.Abstract, { ...data, Qty: 5 });
        expect(res.length).toBe(5);
    });
});
