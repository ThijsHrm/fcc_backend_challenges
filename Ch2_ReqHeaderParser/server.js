//Initiate Express
var express = require('express');
var app = express();

//Initiate the relevant module
var parseReq = require('./parseReq.js');

app.get('/', function(req, res) {
    res.send(parseReq(req));
});

//Specify the ports for the API
app.listen(process.env.PORT || 8080);