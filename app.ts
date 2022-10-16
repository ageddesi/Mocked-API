require('dotenv').config();
import express, { Request, Response } from 'express';
import { swaggerSpec } from './utils/swagger';
import swag from './swagger.json';
import { applicationRateLimiter } from './middleware/rate-limiter/rate-limiter';

const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Rate limit middleware
app.use(applicationRateLimiter); // rate-limit applied to all the routes by default

// Load Mock Modules
require('./modules/address/address.routes')(app); // Addresses
require('./modules/animal/animal.routes')(app); // Animals
require('./modules/bank-feed/bankfeed.routes')(app); // Bank Feed
require('./modules/chat/chat.routes')(app); // Chat
require('./modules/colors/colors.routes')(app); // Colors
require('./modules/countries/countries.routes')(app); // Countries
require('./modules/currency/api/currency-routes')(app); // Currencies
require('./modules/ecommerce/api/ecommerce-routes')(app); // Ecommerce
require('./modules/emails/api/emails-routes')(app); // Emails
require('./modules/images/api/images-routes')(app); // Images
require('./modules/names/api/names-routes')(app); // Names
require('./modules/products/api/products-routes')(app); // Products
require('./modules/socials/api/socials-routes')(app); // Socials
require('./modules/sports/api/sports-routes')(app); // Sports
require('./modules/users/api/user-routes')(app); //Users
require('./modules/music/api/music-routes')(app); // Music
require('./modules/invoice/api/invoice-routes')(app); // Invoices
require('./modules/elements/api/elements-routes')(app); // Chemical Elements
require('./modules/time_zones/api/timezones-routes.ts')(app); // Timezones
require('./modules/phone-numbers/api/phone-numbers-routes')(app); // Phone numbers
require('./modules/quotes/api/quotes-routes')(app); // Quotes
require('./modules/ip/api/ip-routes')(app); // ip and mac address
require('./modules/vehicles/api/vehicles-routes')(app); // Vehicles
require('./modules/location/api/location-routes')(app); // Bank Feed
require('./modules/instruments/api/instruments-routes')(app); // Instruments

// Add an healthcheck endpoint
// Shows amount of API Categories and their endpoints
app.get('/status', (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
        totalCategories: swag.tags.length,
        totalEndpoints: Object.keys(swag.paths).length,
    };
    res.status(200).send(data);
});

// Docs in JSON format
app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// Setup Swagger API Documentation
const swaggerUi = require('swagger-ui-express');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests

export default app;
