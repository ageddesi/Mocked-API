import request from 'supertest';
import app from '../../../app';

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

    describe('GET /currencies/market-overview', () => {
        it('should return a currency snapshot', async () => {
            const response = await request(app).get(`/currencies/market-overview`);

            expect(response.body[0]).toHaveProperty('currency');
            expect(response.body[0]).toHaveProperty('value');
            expect(response.body[0]).toHaveProperty('change');
            expect(response.body[0]).toHaveProperty('netChange');
        });
    });

    describe('GET /currencies/gbp-usd/ticker', () => {
        it('should return gpb_usd ticker data', async () => {
            const response = await request(app).get(`/currencies/gbp-usd/ticker`);

            expect(response.body[0]).toHaveProperty('ticker');
        });
    });

    describe('GET /currencies/digital-coins/bitcoin/random-address/:qty?', () => {
        it('should return a list of bitcoin addresses', async () => {
            const qty = 5;
            const response = await request(app).get(`/currencies/digital-coins/bitcoin/random-address/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /currencies/digital-coins/ethereum/random-address/:qty?', () => {
        it('should return a list of eth addresses', async () => {
            const qty = 5;
            const response = await request(app).get(`/currencies/digital-coins/ethereum/random-address/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });

    describe('GET /currencies/digital-coins/litecoin/random-address/:qty?', () => {
        it('should return a list of litecoin addresses', async () => {
            const qty = 5;
            const response = await request(app).get(`/currencies/digital-coins/litecoin/random-address/${qty}`);

            expect(response.body.length).toBe(qty);
        });
    });
});
