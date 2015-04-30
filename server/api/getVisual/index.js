'use strict';

var express = require('express');
var controller = require('./getVisual.controller');

var router = express.Router();


router.get('/', function(res, req){
  console.log("this is inside the router.get");
});

module.exports = router;
