var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

var routes = require("./controllers/hotdogs_controller.js");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port, function() {
	console.log("listening on port: " + port);
});