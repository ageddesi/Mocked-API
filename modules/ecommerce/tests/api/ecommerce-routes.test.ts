import app from "../../../../app";
let request = require('supertest');

describe('ecommerce api endpoints', () => {
  describe('GET /ecommerce/cart', () => {
    it('should return a random cart with random products', async () => {
      const response = await request(app).get(`/ecommerce/cart`);
      
      const cart = response.body;

      expect(cart).toHaveProperty('subtotal');
      expect(cart).toHaveProperty('couponCode');
      expect(cart).toHaveProperty('couponPercent');
      expect(cart).toHaveProperty('couponValue');
      expect(cart).toHaveProperty('taxPercent');
      expect(cart).toHaveProperty('taxApplied');
      expect(cart).toHaveProperty('postageValue');
      expect(cart).toHaveProperty('total');
      expect(cart).toHaveProperty('products');

      expect(cart.products[0]).toHaveProperty('pricePerUnit')
      expect(cart.products[0]).toHaveProperty('quantity')

      expect(cart.products[0].product).toHaveProperty('productName')
      expect(cart.products[0].product).toHaveProperty('productId')
      expect(cart.products[0].product).toHaveProperty('message')
      expect(cart.products[0].product).toHaveProperty('dateTime')
      expect(cart.products[0].product).toHaveProperty('rating')
      expect(cart.products[0].product).toHaveProperty('userName')
      expect(cart.products[0].product).toHaveProperty('categories')
    });
  });

  describe('GET /ecommerce/cart/qty', () => {
    const qty = 2;

    it('should return a random cart with the given quantity of products', async () => {
      const response = await request(app).get(`/ecommerce/cart/${qty}`);
      expect(response.body.products.length).toEqual(qty);
    });
  });
});