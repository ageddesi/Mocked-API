import express from 'express';

const app = express();
const port = 3000;

// Load Mock Modules
require('./modules/names/api/route')(app); // Names

app.listen(port, () => {
  console.log(`Mock API is running on port ${port}.`);
});