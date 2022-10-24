import { faker } from '@faker-js/faker';
import centroids from '../consts/centroids';

const getRandomCoordinates = () => {
    const longitude = faker.address.longitude();
    const latitude = faker.address.latitude();
    return { longitude, latitude };
};

const getCountryCoordinates = (countryCode: string) => {
    const data = centroids[countryCode];
    const coordinates = faker.address.nearbyGPSCoordinate([data.latitude, data.longitude], 500);
    return { longitude: coordinates[0], latitude: coordinates[1], country: data.country };
};

export { getRandomCoordinates, getCountryCoordinates };
