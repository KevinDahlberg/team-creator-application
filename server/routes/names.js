var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var NameSchema = mongoose.Schema({
  name : String,
});

module.exports = router;
