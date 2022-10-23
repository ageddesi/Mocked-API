import { faker } from '@faker-js/faker';
import { Request } from 'express';
import { getQtyFromRequest } from '../../../utils/route-utils';
import productReviews from '../../products/data/product-reviews';
import { EcommerceCart, EcommerceCartItem } from '../consts/ecommerce-cart';

const DEFAULT_CART_QUANTITY = 5;

const inputOrNull = <T>(val: T) => (Math.random() > 0.5 ? val : null);
const randomInt = (max: number = 20) => Math.ceil(Math.random() * max);
const toTwoDigits = (num: number) => +num.toFixed(2);

function getEcommerceCart(req: Request): Partial<EcommerceCart> {
    const quantity = getQtyFromRequest(req, DEFAULT_CART_QUANTITY);

    const manyProducts: EcommerceCartItem['product'][] = [];

    // Add enough products to satisfy the quantity requested
    while (manyProducts.length < quantity) {
        manyProducts.push(...productReviews);
    }

    const products: EcommerceCartItem[] = manyProducts
        .slice(0, quantity)
        .map((product) => ({
            product,
            pricePerUnit: toTwoDigits(Math.random() * 100),
            quantity: Math.ceil(Math.random() * 5),
        }))
        // Randomize order of product list
        .sort((a, b) => 0.5 - Math.random());

    const subtotal = products.reduce((total, product) => total + product.pricePerUnit * product.quantity, 0);

    const couponCode = inputOrNull(faker.word.noun().toUpperCase());
    const couponPercent = couponCode ? randomInt() : null;
    const couponValue = toTwoDigits(((couponPercent || 0) * subtotal) / 100);

    const taxPercent = randomInt(10);
    const taxApplied = toTwoDigits((taxPercent * subtotal) / 100);

    const postageValue = randomInt(10);

    const total = subtotal - couponValue + taxApplied + postageValue;

    return {
        subtotal,
        couponCode,
        couponPercent,
        couponValue,
        taxPercent,
        taxApplied,
        postageValue,
        total,
        products,
    };
}

export { getEcommerceCart };
