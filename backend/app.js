const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const handleErrors = require('./utils/errors/handleErrors');

// API will use json for all requests
app.use(bodyParser.json());

// setup CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// app.get('/', (req, res) =>
// {
//   res.status(200).sendFile(path.join( __dirname, '../src/index.html'));
// });

app.use('/api/user', require('./routes/userRoutes'));

// add error handling middleware
app.use(handleErrors.handleErrors);


module.exports = app;
