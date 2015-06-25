var express = require('express'),
    app = express();

var router = express.Router();
app.use('/', require('./router'));

module.exports = app;
