require('dotenv').config();
import express, { Request, Response } from 'express';
import { swaggerSpec } from './src/utils/swagger';
import { applicationRateLimiter } from './middleware/rate-limiter/RateLimiter';
import { initSwagger } from './src/setup/swagger';
import { initSentry } from './src/setup/sentry';
import path from 'path';
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const app = express();

const constantPath = './src/modules/';
const routes = {};

if (process.env.ENABLE_SENTRY === 'true') initSentry(app, process.env);
if (process.env.ENABLE_MORGAN_LOGGING === 'true') app.use(morgan('combined')); // adding morgan to log HTTP requests
if (process.env.ENABLE_RATE_LIMIT === 'true') app.use(applicationRateLimiter); // enable RateLimiting

app.use(express.static(path.join(__dirname, 'public')));

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
        totalCategories: swaggerSpec['tags'].length,
        totalEndpoints: Object.keys(swaggerSpec['paths']).length,
        version: swaggerSpec['info']['version'],
    };
    res.status(200).send(data);
});

app.use(cors()); // enabling CORS for all requests;

if (process.env.ENABLE_SWAGGER === 'true') initSwagger(app); // setup Swagger;

export default app;
