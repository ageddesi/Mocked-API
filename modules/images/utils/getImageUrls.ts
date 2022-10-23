import ImageDataType from '../consts/imageDataType';
import ImageEnum from '../consts/ImageEnum';
import { faker } from '@faker-js/faker';

const getImageUrls = (type: ImageEnum, data: ImageDataType) => {
    const imageUrls = [];

    for (let index = 0; index < data.Qty; index++) {
        switch (type) {
            case ImageEnum.Abstract:
                imageUrls.push(faker.image.abstract(data.Width, data.Height, true));
                break;
            case ImageEnum.Animals:
                imageUrls.push(faker.image.animals(data.Width, data.Height, true));
                break;
            case ImageEnum.Avatar:
                imageUrls.push(faker.image.avatar());
                break;
            case ImageEnum.Business:
                imageUrls.push(faker.image.business(data.Width, data.Height, true));
                break;
            case ImageEnum.Cats:
                imageUrls.push(faker.image.cats(data.Width, data.Height, true));
                break;
            case ImageEnum.City:
                imageUrls.push(faker.image.city(data.Width, data.Height, true));
                break;
            case ImageEnum.Fashion:
                imageUrls.push(faker.image.fashion(data.Width, data.Height, true));
                break;
            case ImageEnum.Food:
                imageUrls.push(faker.image.food(data.Width, data.Height, true));
                break;
            case ImageEnum.Nature:
                imageUrls.push(faker.image.nature(data.Width, data.Height, true));
                break;
            case ImageEnum.Nightlife:
                imageUrls.push(faker.image.nightlife(data.Width, data.Height, true));
                break;
            case ImageEnum.People:
                imageUrls.push(faker.image.people(data.Width, data.Height, true));
                break;
            case ImageEnum.Sports:
                imageUrls.push(faker.image.sports(data.Width, data.Height, true));
                break;
            case ImageEnum.Technics:
                imageUrls.push(faker.image.technics(data.Width, data.Height, true));
                break;
            case ImageEnum.Transport:
                imageUrls.push(faker.image.transport(data.Width, data.Height, true));
                break;
        }
    }

    return imageUrls;
};

export default getImageUrls;
