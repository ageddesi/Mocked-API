import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const { version } = require('../package.json');

const options: swaggerJsdoc.Options = {
    definition: {
        swagger: '2.0',
        info: {
            version,
            title: 'Mocked-API',
            description:
                'An API library for providing endpoints of mock data for use during testing. This API is still in the development and until it reaches version 1.0.0 the API is subject to change. To find out more head over to https://mocked-api.dev/',
        },
        host: 'api.mocked-api.dev',
        schemes: ['https'],
        basePath: '/',
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {
                name: 'Animals',
                description: 'A set of endpoints related to animal',
            },
            {
                name: 'Chat',
                description: 'A set of endpoints related to chats',
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
                name: 'Emails',
                description: 'A set of endpoints related to emails',
            },
            {
                name: 'Images',
                description: 'A set of endpoints related to obtaining placeholder image urls',
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
        ],
    },
    apis: ['./modules/*/api/*.ts', './modules/*/consts/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
