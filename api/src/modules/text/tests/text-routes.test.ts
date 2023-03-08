import request from 'supertest';
import app from '../../../../app';

describe('text api endpoints', () => {
    // Line
    describe('GET /text/line', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/line`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });
    });

    describe('GET /text/lines/', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/lines/`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });

        it('should return a correct amount of responses', async () => {
            const qty = 10;
            const response = await request(app).get(`/text/lines/${qty}`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(qty);
        });
    });

    // Paragraph
    describe('GET /text/paragraph', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/paragraph`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });
    });

    describe('GET /text/paragraphs/', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/paragraphs/`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });

        it('should return a correct amount of responses', async () => {
            const qty = 10;
            const response = await request(app).get(`/text/paragraphs/${qty}`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(qty);
        });
    });

    // Sentences
    describe('GET /text/sentence', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/sentence`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });
    });

    describe('GET /text/sentences/', () => {
        it('should return a response', async () => {
            const response = await request(app).get(`/text/sentences/`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(1);
        });

        it('should return a correct amount of responses', async () => {
            const qty = 10;
            const response = await request(app).get(`/text/sentences/${qty}`);
            expect(response).not.toBeFalsy();
            expect(response.body.length).toBe(qty);
        });
    });
});
