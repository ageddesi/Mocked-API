import { faker } from '@faker-js/faker';
import sizeEnum from '../const/sizeEnum';

const getProducts = (qty: number = 10, category: string = null) => {
    const productList = [];
    // initiate sizeOptions array
    for (let index = 0; index < qty; index++) {
        const sizeOptions = [
            // with a Standard size
            {
                meta: { size: 'Standard' },
                price: faker.commerce.price(),
                amount: faker.datatype.number(),
            },
        ];
        const sizeValues = Object.keys(sizeEnum); // store enum keys in array
        for (let i = 0; i < Math.floor(Math.random() * sizeValues.length); i++) {
            // generate a random amount of size options
            // and add these to the sizeOptions array
            sizeOptions.push({
                meta: { size: sizeValues[i] },
                price: faker.commerce.price(),
                amount: faker.datatype.number(),
            });
        }
        productList.push({
            department: category || faker.commerce.department(),
            type: faker.commerce.product(),
            name: faker.commerce.productName(),
            adjective: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
            material: faker.commerce.productMaterial(),
            sku: sizeOptions,
        });
    }

    return productList;
};

export default getProducts;
