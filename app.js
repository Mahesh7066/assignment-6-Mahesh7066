const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Routes/routes.js');

const hostname = 'localhost';
const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', router);

// Connected to online database---> MongoDB
const serverDB = 'mongodb+srv://Sarita123:yvq79jsyl81Yifb6@saritacluster.9jdhy.mongodb.net/zomoto-backend?retryWrites=true&w=majority'
const localDB = 'mongodb://localhost:27017/myweb';


mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {

    app.listen(port, hostname, () => {
        console.log(`Server is running on http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
});