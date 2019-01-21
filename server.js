//Description: This will start a server and connect to mongodb to access the items
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Products = require('./api/models/Models'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ProductsDB',{ useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


console.log('RESTful API server started on: ' + port);