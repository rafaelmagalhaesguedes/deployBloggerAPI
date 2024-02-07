const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();

app.use(cors());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(routers);

app.get('/', (_request, response) => response.send('Healthy check OK!'));

module.exports = app;