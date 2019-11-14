var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port either Heroku selected or, if not, developer specific
var PORT = process.env.PORT || 8080;

// Middleware sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* ROUTER
Points server to "route" files giving a "map" of how to respond when users visit or request data from various URLs. */
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app, path);
require("./app/routing/htmlRoutes")(app, path);

// LISTENER
// The server effectively starts
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});