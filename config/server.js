var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

//Nível será em app.js quem esta executando essa module.
consign().include('./app/routes').into(app);

module.exports = app;