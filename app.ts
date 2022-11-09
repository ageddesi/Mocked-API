require('dotenv').config();
import express, { Request, Response } from 'express';
import swag from './swagger.json';
import { applicationRateLimiter } from './middleware/rate-limiter/RateLimiter';
import { initSwagger } from './src/setup/swagger';
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const app = express();

const constantPath = './src/modules/';
const routes = {};

fs.readdirSync(constantPath).forEach((module) => {
    const apiRoutePath = `${constantPath}${module}/api/`;
    fs.readdirSync(apiRoutePath).forEach((route) => {
        routes[module] = require(`${apiRoutePath}${route}`)(app);
    });
});

// Add healthcheck endpoints
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
        version: swag.info.version,
    };
    res.status(200).send(data);
});

if (process.env.ENABLE_RATE_LIMIT === 'true') app.use(applicationRateLimiter); // enable RateLimiting
initSwagger(app); // setup Swagger
app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests

export default app;
