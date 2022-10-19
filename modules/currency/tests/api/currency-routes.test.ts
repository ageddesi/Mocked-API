import request from 'supertest';
import app from '../../../../app';

describe('currency api endpoints', () => {
    describe('GET /currencies/digital-coins/ethereum/tx-list', () => {
        it('should return a list of transactions performed by an address', async () => {
            const qty = 10;
            const response = await request(app).get(`/currencies/digital-coins/ethereum/tx-list/0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /currencies/digital-coins/balance/:network?/:address?', () => {
        it('should return the balance of an address on a specified network', async () => {
            const network = "ethereum";
            const address = "0xc0ffee254729296a45a3885639AC7E10F9d54979"
            const response = await request(app).get(`/currencies/digital-coins/balance/${network}/${address}`);

            expect(response.body.unit).toBe("ETH");
            expect(response.body.amount).toBeGreaterThan(0);
        });
    });
});