import express from 'express';
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

// Load Mock Modules
require('./modules/animal/api/animal-routes')(app) // Animals
require('./modules/countries/api/countries-routes')(app); // Countries
require('./modules/names/api/names-routes')(app); // Names

// Add an healthcheck endpoint
app.get('/status', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }
  res.status(200).send(data);
});

// Setup Swagger API Documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
app.use(
  '/',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined'));  // adding morgan to log HTTP requests

app.listen(port, () => {
  console.log(`Mock API is running on port ${port}.`);
});