//Set up Express
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Set up EJS -- look at those views
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Get those routes
var routes = require(__dirname + '/config/routes');
app.use('/', routes);

//Start server
app.listen(process.env.PORT || 3000);