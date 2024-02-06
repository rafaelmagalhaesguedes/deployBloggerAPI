const express = require('express');
const cors = require('cors');
const { accessControl } = require('./middleware/auth.middleware');
const routers = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);
app.use(accessControl);

app.get('/', (_request, response) => response.send('Healthy check OK!'));

module.exports = app;