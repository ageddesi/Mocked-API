import app from '../../../../../app';
let request = require('supertest');

describe('bank feed api endpoints', () => {
    describe('GET /bank/feed/:qty', () => {
        it('should return a list of bank statement', async () => {
            const qty = 5;

            const response = await request(app).get(`/bank/feed/${qty}`);
            const bankData = response.body;
            const bankStatement = bankData.statement[0];

            // bank data
            expect(bankData).toHaveProperty('id');
            expect(bankData).toHaveProperty('accountnumber');
            expect(bankData).toHaveProperty('ifsc');
            expect(bankData).toHaveProperty('sortcode');
            expect(bankData).toHaveProperty('isbn');
            expect(bankData).toHaveProperty('statement');

            // bank statement
            expect(bankData.statement.length).toEqual(1);
            expect(bankStatement).toHaveProperty('date');
            expect(bankStatement).toHaveProperty('description');
            expect(bankStatement).toHaveProperty('amount');
            expect(parseInt(bankStatement.amount)).toEqual(qty);
        });
    });
});
