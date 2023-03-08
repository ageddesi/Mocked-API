import Invoice from '../consts/Invoice';
import { faker } from '@faker-js/faker';

const getRandomInvoices = (qty: number) => {
    const invoices: Invoice[] = [];

    Array.from({ length: qty }).forEach(() => {
        invoices.push({
            id: faker.datatype.uuid(),
            invoiceNumber: faker.finance.account(),
            reference: faker.address.zipCode(),
            invoiceDate: faker.date.past(),
            amount: {
                currencyCode: faker.finance.currencyCode(),
                value: faker.finance.amount(),
            },
            note: faker.lorem.sentence(),
            title: faker.commerce.productName(),
            invoicer: {
                id: faker.datatype.uuid(),
                name: faker.company.name(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                phoneNumber: faker.phone.number(),
            },
            recipient: {
                name: faker.name.fullName(),
                email: faker.internet.email(),
            },
        });
    });

    return invoices;
};

export default getRandomInvoices;
