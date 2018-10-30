// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Router
// =============================================================
require("./routes/apiRoutes")(app, path);
require("./routes/htmlRoutes")(app, path);


// Listener
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});