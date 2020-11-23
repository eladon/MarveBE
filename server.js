require('rootpath')();
const express = require('express');
const helmet = require('helmet'); //http headers protection
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const dotenv = require('dotenv');

app.use(helmet());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.get('/', (req, res) => res.send('hello'));
app.use('/actors', require('./actors/actors.controller'));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === 'production'
    ? process.env.PORT || 443
    : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
