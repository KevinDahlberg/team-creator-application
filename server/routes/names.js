var express = require('express');

var router = express.Router();
var mongoose = require("mongoose");

var NamesSchema = mongoose.Schema({
  name : String,
});

var GroupsSchema = mongoose.Schema({
  project_num: Number,
  group_name: String,
  names: Array
});

var Names = mongoose.model("Names", NamesSchema);
var Groups = mongoose.model("Groups", GroupsSchema);

//GET names
router.get("/getAllNames", function(req,res){
  //Get all names
  Names.find(function(err, allNames){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allNames);
  });
});

//get groups
router.get("/allGroups", function(req, res){
  Groups.find(function(err, allGroups){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    res.send(allGroups);
  });
});

//post Groups
router.post("/saveNewGroup", function(req,res){
  //Instance of the Model to be saved to the database
  var groups = new Groups();

  groups.name = req.body.group_name;
  groups.curGroup = req.body.names;
  groups.save(function(err, savedGroups){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    res.send(savedGroups);
  });
});

module.exports = router;
