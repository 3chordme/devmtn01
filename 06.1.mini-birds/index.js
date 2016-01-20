var express = require('express')
	,	bodyParser = require('body-parser')
	,	cors = require('cors')
	, mongojs = require('mongojs');

var app = express();
var db = mongojs('mini-birds', ['sightings']);

app.use(bodyParser.json());




var port = 3000;

app.listen(port, function() {
	console.log("Listening on port", port);
});
