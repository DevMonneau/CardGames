var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

var login = require('./routes/login');
var register = require('./routes/register');
const api = require('./routes/api');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api', api);
app.use('/login', login);
app.use('/register', register);

module.exports = app;
