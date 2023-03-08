import request from 'supertest';
import Invoice from '../consts/Invoice';
import app from '../../../../app';

describe('invoice api endpoints', () => {
    describe('GET /invoices/', () => {
        it('should return a invoice', async () => {
            const response = await request(app).get(`/invoices/`);
            const invoice: Invoice = response.body[0];

            expect(invoice).toHaveProperty('id');
            expect(invoice).toHaveProperty('invoiceNumber');
            expect(invoice).toHaveProperty('invoiceDate');
            expect(invoice).toHaveProperty('note');
            expect(invoice).toHaveProperty('reference');
            expect(invoice).toHaveProperty('title');
            expect(invoice).toHaveProperty('amount');
            expect(invoice).toHaveProperty('amount.currencyCode');
            expect(invoice).toHaveProperty('amount.value');
            expect(invoice).toHaveProperty('recipient');
            expect(invoice).toHaveProperty('recipient.name');
            expect(invoice).toHaveProperty('recipient.email');
            expect(invoice).toHaveProperty('invoicer');
            expect(invoice).toHaveProperty('invoicer.id');
            expect(invoice).toHaveProperty('invoicer.name');
            expect(invoice).toHaveProperty('invoicer.email');
            expect(invoice).toHaveProperty('invoicer.address');
            expect(invoice).toHaveProperty('invoicer.phoneNumber');
        });
    });

    describe('GET /invoices/:qty', () => {
        it('should return a list of invoices', async () => {
            const qty = 5;

            const response = await request(app).get(`/invoices/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});
