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
/** DEFINE SENTRY LOGGING */
const Sentry = require('@sentry/node');
const SentryTracing = require('@sentry/tracing');
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new SentryTracing.Integrations.Express({
            app,
        }),
    ],
});

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

app.use(Sentry.Handlers.errorHandler());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
if (process.env.ENABLE_RATE_LIMIT === 'true') app.use(applicationRateLimiter); // enable RateLimiting
initSwagger(app); // setup Swagger
app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests

export default app;
