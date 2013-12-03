var express = require('express');
var path    = require('path');
var pubDir  = path.join(__dirname, 'public');
var app     = null;

module.exports = app = express();

app.set('port', 8080);
app.use(express.favicon());    // prohibit 404 on missing favicon.ico request
app.use(express.logger('dev'));    // log all requests to console

// finally deliver static files as if nothing happend:
app.use(express.static(pubDir));

app.listen(app.get('port'), function whenListening() {
    console.log('Server is listening on port ' + app.get('port'));
});