require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

// Load Mock Modules
require('./modules/animal/api/animal-routes')(app) // Animals
require('./modules/chat/api/chat-routes')(app) // Chat
require('./modules/colors/api/colors-route')(app); // Colors
require('./modules/countries/api/countries-routes')(app); // Countries
require('./modules/currency/api/currency-routes')(app); // Currencies
require('./modules/emails/api/emails-routes')(app); // Emails
require('./modules/images/api/images-routes')(app); // Images
require('./modules/names/api/names-routes')(app); // Names
require('./modules/products/api/products-routes')(app); // Products
require('./modules/socials/api/socials-routes')(app); // Socials
require('./modules/sports/api/sports-routes')(app); // Sports
require('./modules/users/api/user-routes')(app); //Users
require('./modules/music/api/music-routes')(app); // Music
require('./modules/quotes/api/qoutes-routes')(app); // Quotes
require('./modules/time_zones/api/timezones-routes.ts')(app); // Timezones

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
