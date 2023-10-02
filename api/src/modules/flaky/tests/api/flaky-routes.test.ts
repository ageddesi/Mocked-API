import request from 'supertest';
import app from '../../../../../app';

describe('flaky api endpoints', () => {
    describe('GET /flaky', () => {
        it('should return one of the default responses', async () => {
            const response = await request(app).get(`/flaky/`);

            expect([200, 500]).toContain(response.statusCode);

            expect(response.body).toEqual({});
        });        
        
        it('should return one of the defined responses', async () => {
            let responses = [
                {
                    status_code: 202,
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];
            let expected_messages = responses.map((response) => response.data);

            const response = await request(app).get(`/flaky/`).send({
                responses: responses
            });

            expect([202, 505]).toContain(response.statusCode);
            expect(expected_messages).toContainEqual(response.text);
        });

        it('should return a 400 if a response is missing a status code', async () => {
            let responses = [
                {
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];

            const response = await request(app).get(`/flaky/`).send({
                responses: responses
            });

            expect(response.statusCode).toEqual(400);
        });
    });

    describe('POST /flaky', () => {
        it('should return one of the default responses', async () => {
            const response = await request(app).post(`/flaky/`);

            expect([200, 500]).toContain(response.statusCode);

            expect(response.body).toEqual({});
        });        
        
        it('should return one of the defined responses', async () => {
            let responses = [
                {
                    status_code: 202,
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];
            let expected_messages = responses.map((response) => response.data);

            const response = await request(app).post(`/flaky/`).send({
                responses: responses
            });

            expect([202, 505]).toContain(response.statusCode);
            expect(expected_messages).toContainEqual(response.text);
        });

        it('should return a 400 if a response is missing a status code', async () => {
            let responses = [
                {
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];

            const response = await request(app).post(`/flaky/`).send({
                responses: responses
            });

            expect(response.statusCode).toEqual(400);
        });
    });

    describe('PUT /flaky', () => {
        it('should return one of the default responses', async () => {
            const response = await request(app).put(`/flaky/`);

            expect([200, 500]).toContain(response.statusCode);

            expect(response.body).toEqual({});
        });        
        
        it('should return one of the defined responses', async () => {
            let responses = [
                {
                    status_code: 202,
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];
            let expected_messages = responses.map((response) => response.data);

            const response = await request(app).put(`/flaky/`).send({
                responses: responses
            });

            expect([202, 505]).toContain(response.statusCode);
            expect(expected_messages).toContainEqual(response.text);
        });

        it('should return a 400 if a response is missing a status code', async () => {
            let responses = [
                {
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];

            const response = await request(app).put(`/flaky/`).send({
                responses: responses
            });

            expect(response.statusCode).toEqual(400);
        });
    });

    describe('DELETE /flaky', () => {
        it('should return one of the default responses', async () => {
            const response = await request(app).delete(`/flaky/`);

            expect([200, 500]).toContain(response.statusCode);

            expect(response.body).toEqual({});
        });        
        
        it('should return one of the defined responses', async () => {
            let responses = [
                {
                    status_code: 202,
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];
            let expected_messages = responses.map((response) => response.data);

            const response = await request(app).delete(`/flaky/`).send({
                responses: responses
            });

            expect([202, 505]).toContain(response.statusCode);
            expect(expected_messages).toContainEqual(response.text);
        });

        it('should return a 400 if a response is missing a status code', async () => {
            let responses = [
                {
                    weight: 1,
                    data: "success"
                },
                {
                    status_code: 505,
                    weight: 1,
                    data: "failure"
                }
            ];

            const response = await request(app).delete(`/flaky/`).send({
                responses: responses
            });

            expect(response.statusCode).toEqual(400);
        });
    });
});
