require('dotenv').config();
import express, { Request, Response } from 'express';
import { swaggerSpec } from './src/utils/swagger';
import swag from './swagger.json';
import { applicationRateLimiter } from './middleware/rate-limiter/RateLimiter';
import path from 'path';
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Rate limit middleware
app.use(applicationRateLimiter); // rate-limit applied to all the routes by default

// Load Mock Modules
require('./src/modules/animal/api/animal-routes')(app); // Animals
require('./src/modules/chat/api/chat-routes')(app); // Chat
require('./src/modules/colors/api/colors-route')(app); // Colors
require('./src/modules/countries/api/countries-routes')(app); // Countries
require('./src/modules/currency/api/currency-routes')(app); // Currencies
require('./src/modules/ecommerce/api/ecommerce-routes')(app); // Ecommerce
require('./src/modules/emails/api/emails-routes')(app); // Emails
require('./src/modules/images/api/images-routes')(app); // Images
require('./src/modules/names/api/names-routes')(app); // Names
require('./src/modules/products/api/products-routes')(app); // Products
require('./src/modules/socials/api/socials-routes')(app); // Socials
require('./src/modules/sports/api/sports-routes')(app); // Sports
require('./src/modules/users/api/user-routes')(app); //Users
require('./src/modules/music/api/music-routes')(app); // Music
require('./src/modules/invoice/api/invoice-routes')(app); // Invoices
require('./src/modules/elements/api/elements-routes')(app); // Chemical Elements
require('./src/modules/time_zones/api/timezones-routes.ts')(app); // Timezones
require('./src/modules/phone-numbers/api/phone-numbers-routes')(app); // Phone numbers
require('./src/modules/quotes/api/quotes-routes')(app); // Quotes
require('./src/modules/ip/api/ip-routes')(app); // ip and mac address
require('./src/modules/vehicles/api/vehicles-routes')(app); // Vehicles
require('./src/modules/address/api/address-routes')(app); // Addresses
require('./src/modules/bankfeed/api/bankfeed-routes')(app); // Bank Feed
require('./src/modules/location/api/location-routes')(app); // Bank Feed
require('./src/modules/instruments/api/instruments-routes')(app); // Instruments
require('./src/modules/news/api/news-routes')(app); // news
require('./src/modules/video/api/video-routes')(app) // Video Data
require('./src/modules/chuck-norris/api/chuck-norris-routes')(app) // Chuck Norris Fact.

// Add an healthcheck endpoint
// Shows amount of API Categories and their endpoints
app.get('/status', (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
    };
    res.status(200).send(data);
});
app.get('/full-status', (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
        totalCategories: swag.tags.length,
        totalEndpoints: Object.keys(swag.paths).length,
        version: swag.info.version
    };
    res.status(200).send(data);
});

// Docs in JSON format
app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
app.use(express.static(path.join(__dirname,'public')))

const schemaOptions = {
    swaggerOptions: {
        dom_id: "#swagger-ui",
        tagsSorter: "alpha",
        operationsSorter: "alpha",
        docExpansion: "none"
    }
};

// Setup Swagger API Documentation
const swaggerUi = require('swagger-ui-express');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, schemaOptions));

app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests

export default app;
