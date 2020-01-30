var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./src/routes');

var app = express();
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => {
 console.log("deu certo!");
})