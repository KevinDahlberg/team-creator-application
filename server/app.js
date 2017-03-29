var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var names = require('./routes/names.js');
var port = 4000;
var names = require('./routes/names.js');


//uses
app.use(express.static('server/public', {index: 'views/index.html'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/names', names);


//Database Variables
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/kreator";
var MongoDB = mongoose.connect(mongoURI).connection;

//If there is an error connecting to the database, let us know!
MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});

//If we successfully hooked up to the database, let us know!
MongoDB.once("open", function(){
  console.log("Connected to Mongo!");
});

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
