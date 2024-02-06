const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routers);

app.get('/', (_request, response) => response.send('Healthy check OK!'));

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

module.exports = app;