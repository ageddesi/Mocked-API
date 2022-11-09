import Vehicle from '../consts/Vehicle';
import { faker } from '@faker-js/faker';

const getRandomVehicles = (qty: number): Vehicle[] => {
    const vehicles: Vehicle[] = [];

    Array.from({ length: qty }).forEach(() => {
        vehicles.push({
            name: faker.vehicle.vehicle(),
            type: faker.vehicle.type(),
            color: faker.vehicle.color(),
            fuel: faker.vehicle.fuel(),
            manufacturer: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            vin: faker.vehicle.vin(),
            vrm: faker.vehicle.vrm(),
        });
    });

    return vehicles;
};

export default getRandomVehicles;
