var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var noc = require("no-console");

var routes = require("./src/routes");

var app = express();

noc(app);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);

routes(app);

app.listen(3000, () => {
  console.log("deu certo!");
});
