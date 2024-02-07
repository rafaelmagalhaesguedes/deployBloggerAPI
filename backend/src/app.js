const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.options('*', cors());

app.use(routers);

app.get('/', (_request, response) => response.send('Healthy check OK!'));

module.exports = app;