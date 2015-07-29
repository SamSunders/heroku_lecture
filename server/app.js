var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000)); // basically we are setting the port property. There is an object called
// process. So if this thing is on heroku use the port that is already defined. OR use port 5000. The first part just
// says use the port that whichever thing you are useins port.

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/views/index.html")); // __dirname is sort of like "this" in refrance to
    // where the request is coming in from
});

app.listen(app.get('port'), function() { // sending listening event. Where the app is going to get the 'port'
    console.log("Hey! Listening on Port: " + app.get('port')); // the function is completely optional. You need to
    // listen to the port the function is just giving a response saying it's listening.
});