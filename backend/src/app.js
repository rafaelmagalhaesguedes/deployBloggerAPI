const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routers);

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // replace '*' with your domain if you want to restrict access
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_request, response) => response.send('Healthy check OK!'));

module.exports = app;