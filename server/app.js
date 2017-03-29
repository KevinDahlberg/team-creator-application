var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var names = require('./routes/names');
var port = 4000;

//uses
app.use(express.static('server/public'));
app.use(express.static('server/public', {index: 'views/index.html'}));
app.use('/', index);
app.use('/names', names);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
