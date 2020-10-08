const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const header = require('./middlewares/header')
const authRoutes = require('./routes/auth');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

const MONGO_URL = 'mongodb+srv://..'
const portNumber = process.env.PORT || 8080;

app.use(header);

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

mongoose
  .connect(
    MONGO_URL
  )
  .then(result => {
    app.listen(portNumber);
  })
  .catch(err => console.log(err));