const fs = require('fs');
const data = fs.readFileSync('.env.example');
fs.writeFileSync('.env', data);
console.log(`Mock API .env file created.`);
