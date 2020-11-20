const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const header = require('./middlewares/header')
const app = express();

app.use(cors());
app.use(bodyParser.json());

const config = require('./config.json')

const MONGO_URL = config.databaseURL;
const portNumber = process.env.PORT || config.port;

app.use(header);

require('./routes/routes')(app);

mongoose
  .connect(
    MONGO_URL,{
      useNewUrlParser: true ,
      useUnifiedTopology:true
    }
  )
  .then(result => {
    app.listen(portNumber);
  })
  .catch(err => console.log(err));