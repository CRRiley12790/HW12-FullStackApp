var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expresshdbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));
app.engine('handlebars',expresshdbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

//reference routes.js - imports
var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = 3306;
app.listen(port);
