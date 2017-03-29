var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var NamesSchema = mongoose.Schema({
  name : String,
});

var GroupsSchema = mongoose.Schema({
  project_num: Number,
  group_num: Number,
  names: Array
});

var Names = mongoose.model("Names", NamesSchema);
var Groups = mongoose.model("Groups", GroupsSchema);

//GET names
router.get("/makeNewGroup", function(req,res){
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
router.get("/makeNewGroup", function(req, res){
  Groups.find(function(err, allGroups){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allGroups);
  });
});

//post Groups
router.post("/post", function(req,res){
  //Instance of the Model to be saved to the database
  var groups = new Groups();
  groups.project_num = req.body.project_num;
  groups.group_num = req.body.group_num;
  groups.names = req.body.names;
  groups.save(function(err, savedGroups){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    res.send(savedGroups);
  });
});

module.exports = router;
