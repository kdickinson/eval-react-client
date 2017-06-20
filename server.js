var path = require('path');
var fs = require('fs');
var express = require('express');

var server = express();
var port = 8080;

server.set('view engine', 'html');

server.engine('html', function(path, options, callback) {
    fs.readFile(path, 'utn-8', callback);
});

server.use(express.static(__dirname));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.use(function(err, req, res, next){
    res.status(err.status || 500);
});

server.listen(port, function() {
    console.log('Server listening on port ' + port);
});