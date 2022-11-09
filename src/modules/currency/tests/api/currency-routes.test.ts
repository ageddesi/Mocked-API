import request from 'supertest';
import app from '../../../../../app';

describe('currency api endpoints', () => {
    describe('GET /currencies/digital-coins/ethereum/tx-list', () => {
        it('should return a list of transactions performed by an address', async () => {
            const qty = 10;
            const response = await request(app).get(
                `/currencies/digital-coins/ethereum/tx-list/0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC/${qty}`
            );

            expect(response.body.length).toBe(qty);
        });
    });
});
