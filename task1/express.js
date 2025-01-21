<<<<<<< HEAD
const express = require('express');
const fs = require('fs');
const app = express();


app.use((req, res, next) => {
    const log = {
        timestamp: new Date().toISOString(),
        ip: req.ip,
        url: req.url,
        method: req.method,
        protocol: req.protocol,
        hostname: req.hostname
    };

    console.log(log);

  
    fs.appendFileSync('./requestlog.js', JSON.stringify(log) + '\n');  

    next();  
});


app.get('/', (req, res) => {
    res.send("Welcome to the server!");
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
=======
const express = require('express');
const fs = require('fs');
const app = express();


app.use((req, res, next) => {
    const log = {
        timestamp: new Date().toISOString(),
        ip: req.ip,
        url: req.url,
        method: req.method,
        protocol: req.protocol,
        hostname: req.hostname
    };

    console.log(log);

  
    fs.appendFileSync('./requestlog.js', JSON.stringify(log) + '\n');  

    next();  
});


app.get('/', (req, res) => {
    res.send("Welcome to the server!");
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
>>>>>>> 0705df73f9838e9a13408160cd5aa1d5606dfacb
});