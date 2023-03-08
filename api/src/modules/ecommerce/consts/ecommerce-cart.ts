import productReviews from '../../products/data/product-reviews';

type EcommerceCartItem = {
    product: (typeof productReviews)[number];
    pricePerUnit: number;
    quantity: number;
};

type EcommerceCart = {
    products: EcommerceCartItem[];
    couponCode: string | null;
    couponPercent: number | null;
    couponValue: number | null;
    taxPercent: number | null;
    taxApplied: number | null;
    postageValue: number | null;
    subtotal: number;
    total: number;
};

export { EcommerceCartItem, EcommerceCart };
