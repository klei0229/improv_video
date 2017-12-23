var http = require('http');
var express = require('express');

var PORT = process.env.PORT || 8080;
var APP_ID = 'ac87fc2ffbbb4a6e8c50c502af635eb9'
var app = express();

app.set('port', PORT);
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/app_id', function(req, res){
    if (!APP_ID){
        res.send(500, {
            error: "No APP_ID"
        });
    }
    res.send(APP_ID)
})

http.createServer(app).listen(app.get('port'), function() {
 	console.log('Improv Index Initialized ', app.get('port'));
});