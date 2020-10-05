const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

const MONGO_URL = 'mongodb+srv://..'
const portNumber = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

mongoose
  .connect(
    MONGO_URL
  )
  .then(result => {
    app.listen(portNumber);
  })
  .catch(err => console.log(err));