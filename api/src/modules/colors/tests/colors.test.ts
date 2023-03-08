import request from 'supertest';
import app from '../../../../app'; // "../../../../app";
describe('color api endpoints', () => {
    describe('GET /color/', () => {
        it('requesting with no qty returns a list of 1 color', async () => {
            const qty = 1;
            const response = await request(app).get(`/colors/`);
            expect(response.body.length).toBe(qty);
        });
        it('requesting with non-numerical qty returns a list of 1 color', async () => {
            // I think this is potentially a bug - we probably should be retuning 1 colour, or throwing an error.
            const qty = 1;
            const response = await request(app).get(`/colors/foo`);

            expect(response.body.length).toBe(qty);
        });
        it('requesting with quantity of 2 should return a list of 2 colors', async () => {
            const qty = 2;
            const response = await request(app).get(`/colors/${qty}`);
            expect(response.body.length).toBe(qty);
        });
        it('requesting with quantity of 200 should return a list of 100 colors', async () => {
            const qty = 200;
            const response = await request(app).get(`/colors/${qty}`);
            expect(response.body.length).toBe(100);
        });
    });

    describe('GET /color/x/y/z Execution', () => {
        it.each([
            ['/colors/1/rgba/hex', 1],
            ['/colors/1/hsla/hex', 1],
            ['/colors/1/hsva/hex', 1],
            ['/colors/1/cmyka/hex', 1],
            ['/colors/foo/rgba/hex', 100],
            ['/colors/foo/hsla/hex', 100],
            ['/colors/foo/hsva/hex', 100],
            ['/colors/foo/cmyka/hex', 100],
            ['/colors/2/rgba/hex', 2],
            ['/colors/2/hsla/hex', 2],
            ['/colors/2/hsva/hex', 2],
            ['/colors/2/cmyka/hex', 2],
            ['/colors/200/rgba/hex', 100],
            ['/colors/200/hsla/hex', 100],
            ['/colors/200/hsva/hex', 100],
            ['/colors/200/cmyka/hex', 100],
        ])(
            "requesting '%s' throws 400 Bad Request - alpha channels are not supported for HEX output",
            async (address, expected) => {
                const response = await request(app).get(address);
                expect(response.status).toBe(400);
                expect(response.body).toEqual({ error: 'Cannot convert to hex with alpha' });
            }
        );

        it('Passing in an invalid Colourspace throws an error', async () => {
            const qty = 1;
            const response = await request(app).get(`/colors/1/mock/hex`);
            expect(response.status).toBe(400);
            expect(response.body).toEqual({ error: 'Invalid color space' });
        });

        it('Passing in an invalid format throws an error', async () => {
            const qty = 1;
            const response = await request(app).get(`/colors/1/rgb/foo`);
            expect(response.status).toBe(400);
            expect(response.body).toEqual({ error: 'Invalid format' });
        });

        it.each([
            ['/colors/1/rgb/hex', 1],
            ['/colors/1/hsl/hex', 1],
            ['/colors/1/hsv/hex', 1],
            ['/colors/1/cmyk/hex', 1],
            ['/colors/foo/rgb/hex', 1],
            ['/colors/foo/hsl/hex', 1],
            ['/colors/foo/hsv/hex', 1],
            ['/colors/foo/cmyk/hex', 1],
            ['/colors/2/rgb/hex', 2],
            ['/colors/2/hsl/hex', 2],
            ['/colors/2/hsv/hex', 2],
            ['/colors/2/cmyk/hex', 2],
            ['/colors/200/rgb/hex', 100],
            ['/colors/200/hsl/hex', 100],
            ['/colors/200/hsv/hex', 100],
            ['/colors/200/cmyk/hex', 100],
            ['/colors/1/rgb/decimal', 1],
            ['/colors/1/rgba/decimal', 1],
            ['/colors/1/hsl/decimal', 1],
            ['/colors/1/hsla/decimal', 1],
            ['/colors/1/hsv/decimal', 1],
            ['/colors/1/hsva/decimal', 1],
            ['/colors/1/cmyk/decimal', 1],
            ['/colors/1/cmyka/decimal', 1],
            ['/colors/foo/rgb/decimal', 1],
            ['/colors/foo/rgba/decimal', 1],
            ['/colors/foo/hsl/decimal', 1],
            ['/colors/foo/hsla/decimal', 1],
            ['/colors/foo/hsv/decimal', 1],
            ['/colors/foo/hsva/decimal', 1],
            ['/colors/foo/cmyk/decimal', 1],
            ['/colors/foo/cmyka/decimal', 1],
            ['/colors/2/rgb/decimal', 2],
            ['/colors/2/rgba/decimal', 2],
            ['/colors/2/hsl/decimal', 2],
            ['/colors/2/hsla/decimal', 2],
            ['/colors/2/hsv/decimal', 2],
            ['/colors/2/hsva/decimal', 2],
            ['/colors/2/cmyk/decimal', 2],
            ['/colors/2/cmyka/decimal', 2],
            ,
            ['/colors/200/rgb/decimal', 100],
            ['/colors/200/rgba/decimal', 100],
            ['/colors/200/hsl/decimal', 100],
            ['/colors/200/hsla/decimal', 100],
            ['/colors/200/hsv/decimal', 100],
            ['/colors/200/hsva/decimal', 100],
            ['/colors/200/cmyk/decimal', 100],
            ['/colors/200/cmyka/decimal', 100],
            ['/colors/1/rgb/css', 1],
            ['/colors/1/rgba/css', 1],
            ['/colors/1/hsl/css', 1],
            ['/colors/1/hsla/css', 1],
            ['/colors/1/hsv/css', 1],
            ['/colors/1/hsva/css', 1],
            ['/colors/1/cmyk/css', 1],
            ['/colors/1/cmyka/css', 1],
            ['/colors/foo/rgb/css', 1],
            ['/colors/foo/rgba/css', 1],
            ['/colors/foo/hsl/css', 1],
            ['/colors/foo/hsla/css', 1],
            ['/colors/foo/hsv/css', 1],
            ['/colors/foo/hsva/css', 1],
            ['/colors/foo/cmyk/css', 1],
            ['/colors/foo/cmyka/css', 1],
            ['/colors/2/rgb/css', 2],
            ['/colors/2/rgba/css', 2],
            ['/colors/2/hsl/css', 2],
            ['/colors/2/hsla/css', 2],
            ['/colors/2/hsv/css', 2],
            ['/colors/2/hsva/css', 2],
            ['/colors/2/cmyk/css', 2],
            ['/colors/2/cmyka/css', 2],
            ['/colors/200/rgb/css', 100],
            ['/colors/200/rgba/css', 100],
            ['/colors/200/hsl/css', 100],
            ['/colors/200/hsla/css', 100],
            ['/colors/200/hsv/css', 100],
            ['/colors/200/hsva/css', 100],
            ['/colors/200/cmyk/css', 100],
            ['/colors/200/cmyka/css', 100],
        ])("requesting '%s' return %s", async (address, expected) => {
            const response = await request(app).get(address);
            if (response.status == 500) {
                console.log(response.body);
            }
            expect(response.status).toBe(200);

            expect(response.body.length).toBe(expected);
        });
    });
});
