<<<<<<< HEAD
var express = require('express');
=======
var express = require("express");
>>>>>>> 449dc57518289ba7fed132110c692107671f8ea5
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

module.exports = router;
