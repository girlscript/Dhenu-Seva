const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const config = require('./config.json')

const MONGO_URL = config.databaseURL;
const portNumber = process.env.PORT || config.port;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

require('./routes/routes');

mongoose
  .connect(
    MONGO_URL
  )
  .then(result => {
    app.listen(portNumber);
  })
  .catch(err => console.log(err));