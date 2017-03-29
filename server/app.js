var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;
var names = require('./routes/names.js');

//uses
app.use(express.static('server/public', {index: 'views/index.html'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/names', names);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
