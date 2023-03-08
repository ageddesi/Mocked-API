import app from './app';

const port = 3000;

app.listen(port, () => {
    console.log(`Mock API is running on port ${port}.`);
    console.log(`Vist Mock API in the browser http://localhost:${port}.`);
});
