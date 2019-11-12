var express = require('express');
// var http = require("http");
// var fs = ("fs");
// var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port either Heroku selected or, if not, developer specific
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api=json"}));

/* ROUTER
Points server to "route" files giving a "map" of how to respond when users visit or request data from various URLs. */
app.use(express.static("app/public"));

require("./apps/routes/apiRoute")(app);
require("./apps/routes/htmlRoute")(app);

// LISTENER
// The server effectively starts
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});