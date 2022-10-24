require('dotenv').config();
import express, { Request, Response } from 'express';
import { swaggerSpec } from './src/utils/swagger';
import swag from './swagger.json';
import { applicationRateLimiter } from './middleware/rate-limiter/RateLimiter';
import glob from 'glob';
const morgan = require('morgan');
const cors = require('cors');

var fs = require('fs');

const app = express();

// Rate limit middleware
app.use(applicationRateLimiter); // rate-limit applied to all the routes by default

var constantPath = './src/modules/';
var routes = {};

glob(`${constantPath}/*/*routes.ts`, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    /**
     * Modules name always after the modules folder.
     * e.g. './src/modules/address/address.routes.ts'
     * It means it's the 3rd array
     * */
    files.map((file) => {
        const moduleName = file?.split('/')[3];
        routes[moduleName] = require(file)(app);
    });
});

/* Un-refactored files, and should be removed afterwards */
glob(`${constantPath}/*/api/*.ts`, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.map((file) => {
        const moduleName = file?.split('/')[3];
        routes[moduleName] = require(file)(app);
    });
});

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
        version: swag.info.version,
    };
    res.status(200).send(data);
});

// Docs in JSON format
app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const schemaOptions = {
    swaggerOptions: {
        dom_id: '#swagger-ui',
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
        docExpansion: 'none',
    },
};

// Setup Swagger API Documentation
const swaggerUi = require('swagger-ui-express');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, schemaOptions));

app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests

export default app;
