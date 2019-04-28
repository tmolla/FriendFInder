var path = require("path")
var express = require("express");

var app = express(); //Create an express server
var PORT = process.env.PORT || 3000; //Init port for Heroku use

//Set up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("app"))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})