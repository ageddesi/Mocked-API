import express from 'express';

import app from './app'

const server = express();
const port = 3000;

app.use(app);

server.listen(port, () => {
    console.log(`Mock API is running on port ${port}.`);
});

