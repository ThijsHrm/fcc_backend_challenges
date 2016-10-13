//Initiate Express
var express = require('express');
var app = express();

//Load the module
var createContent = require('./createcontent.js');

//Recieve inputs and act accordingly
app.get('/:input', function(req, res) {
    var output = createContent(req.params.input);
    res.send(output);
});

app.get('/', function(req,res) {
    res.send('Welcome to the timestamp API, please provide input in you adressbar in either date or UNIX timestamp format.');
})

//Specify the ports for the API
app.listen(process.env.PORT || 8080);