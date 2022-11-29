import swaggerJsdoc from 'swagger-jsdoc';

const { version } = require('../../package.json');

const options: swaggerJsdoc.Options = {
    definition: {
        failOnErrors: true,
        swagger: '2.0',
        info: {
            version,
            title: 'Mocked-API',
            description:
                'An API library for providing endpoints of mock data for use during testing. This API is still in the development and until it reaches version 1.0.0 the API is subject to change. To find out more head over to https://mocked-api.dev/',
        },
        host: process.env.HOSTNAME || 'api.mocked-api.dev',
        schemes: [process.env.SCHEME || 'https'],
        basePath: '/',
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {
                name: 'Address',
                description: 'A set of endpoints related to addresses',
            },
            {
                name: 'Animals',
                description: 'A set of endpoints related to animal',
            },
            {
                name: 'Banks',
                description: 'A set of endpoints related to bank feeds',
            },
            {
                name: 'Chat',
                description: 'A set of endpoints related to chats',
            },
            {
                name: 'Chuck Norris',
                description: 'A set of endpoints related to Chuck Norris Facts',
            },
            {
                name: 'Colors',
                description: 'A set of endpoints related to colors',
            },
            {
                name: 'Countries',
                description: 'A set of endpoints related to countries',
            },
            {
                name: 'Currencies',
                description: 'A set of endpoints related to currencies',
            },
            {
                name: 'Ecommerce',
                description: 'A set of endpoints related to ecommerce',
            },
            {
                name: 'Courses',
                description: 'A set of endpoints related to Courses',
            },
            {
                name: 'Elements',
                description: 'A set of endpoints related to elements on the periodic table',
            },
            {
                name: 'Emails',
                description: 'A set of endpoints related to emails',
            },
            {
                name: 'Food',
                description: 'A set of endpoints related to food',
            },
            {
                name: 'Images',
                description: 'A set of endpoints related to obtaining placeholder image urls',
            },
            {
                name: 'IPs',
                description: 'A set of endpoints related to obtaining random IP Addresses',
            },
            {
                name: 'Invoices',
                description: 'A set of endpoints related to invoices',
            },
            {
                name: 'Music',
                description: 'A set of endpoints related to music',
            },
            {
                name: 'Names',
                description: 'A set of endpoints to get randomly generated names',
            },
            {
                name: 'PhoneNumbers',
                description: 'A set of endpoints to get randomly generated phone numbers',
            },
            {
                name: 'Products',
                description: 'A set of endpoints to get random product related info',
            },
            {
                name: 'Quotes',
                description: 'A set of endpoints to get random quote',
            },
            {
                name: 'Socials',
                description: 'A set of endpoints to get random social feed data',
            },
            {
                name: 'Sports',
                description: 'A set of endpoints to get random sports data',
            },
            {
                name: 'Text',
                description: 'A set of endpoints to get random text',
            },
            {
                name: 'TimeZones',
                description: 'A set of endpoints to get random time zones',
            },
            {
                name: 'Users',
                description: 'A set of endpoints to get random user data',
            },
        ],
    },
    apis: ['./src/modules/*/api/*.ts', './src/modules/*/consts/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
