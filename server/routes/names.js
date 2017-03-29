<<<<<<< HEAD
var express = require('express');
var router = express.Router();
=======
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var NamesSchema = mongoose.Schema({
  name : String,
});
var Names = mongoose.model("Names", NamesSchema);

//GET employees
router.get("/", function(req,res){
  //Get all employees
  Names.find(function(err, allNames){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allNames);
  });
});
>>>>>>> 68d69bff5e486f36f2d627c5930f427639557a06

module.exports = router;
