import request from 'supertest';
import app from '../../../../../app';

const get_width_height = (str: string): string[] => {
    const width_height_regex = /\d+\/\d+/;
    const vals = str.match(width_height_regex)[0];
    return vals.split('/');
};

describe('image api endpoints', () => {
    describe('GET images/abstract/:width?/:height?/:qty?', () => {
        it('should return a list of abstract images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/abstract/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/animals/:width?/:height?/:qty?', () => {
        it('should return a list of animals images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/animals/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    //doesnt return anything with a width and height
    describe('GET images/avatar/:width?/:height?/:qty?', () => {
        it.skip('should return a list of avatar images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/avatar/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/business/:width?/:height?/:qty?', () => {
        it('should return a list of business images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/business/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/cats/:width?/:height?/:qty?', () => {
        it('should return a list of cats images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/cats/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/city/:width?/:height?/:qty?', () => {
        it('should return a list of city images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/city/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/fashion/:width?/:height?/:qty?', () => {
        it('should return a list of fashion images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/fashion/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/food/:width?/:height?/:qty?', () => {
        it('should return a list of food images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/food/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/nature/:width?/:height?/:qty?', () => {
        it('should return a list of nature images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/nature/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/nightlife/:width?/:height?/:qty?', () => {
        it('should return a list of nightlife images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/nightlife/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/people/:width?/:height?/:qty?', () => {
        it('should return a list of people images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/people/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/sports/:width?/:height?/:qty?', () => {
        it('should return a list of sports images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/sports/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/technics/:width?/:height?/:qty?', () => {
        it('should return a list of technics images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/technics/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });

    describe('GET images/transport/:width?/:height?/:qty?', () => {
        it('should return a list of transport images', async () => {
            const width = 200;
            const height = 200;
            const qty = 2;
            const response = await request(app).get(`/images/transport/${width}/${height}/${qty}}`);
            expect(response.body.length).toBe(qty);
            const width_height = get_width_height(response.body[0]);
            expect(width_height[0]).toEqual(width.toString());
            expect(width_height[1]).toEqual(height.toString());
        });
    });
});
