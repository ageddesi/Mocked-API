import app from '../../../../../app';
import { EcommerceCart, EcommerceCartItem } from '../../consts/ecommerce-cart';
let request = require('supertest');

describe('ecommerce api endpoints', () => {
    describe('GET /ecommerce/cart', () => {
        it('should return a random cart with random products', async () => {
            const response = await request(app).get(`/ecommerce/cart`);

            expect(response).not.toBeFalsy();
            expect(response.status).toBe(200);

            const ecommerceCart: EcommerceCart = response.body;
            expect(ecommerceCart).toMatchObject<EcommerceCart>;

            expect(ecommerceCart.products as Array<EcommerceCartItem>).toBeTruthy();
            expect(ecommerceCart.products[0].product).toBeInstanceOf(Object);
        });
    });

    describe('GET /ecommerce/cart/qty', () => {
        const qty = 2;

        it('should return a random cart with the given quantity of products', async () => {
            const response = await request(app).get(`/ecommerce/cart/${qty}`);

            expect(response).not.toBeFalsy();
            expect(response.status).toBe(200);

            const ecommerceCartProducts: EcommerceCartItem[] = response.body.products;
            expect(ecommerceCartProducts as Array<EcommerceCartItem>).toBeTruthy();
            expect(ecommerceCartProducts.length).toEqual(qty);
        });
    });
});
