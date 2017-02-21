var express = require('express');
var router = express.Router();
var weatherData = require('../model/weatherData');
/* GET task1 page. */
router.get('/', function(req, res, next) {
  var a=1, b=2;
  if (a === 1){
    res.json({
      test: "test1",
      err: ""
    })
  }
    return;
    if(b === 2){
      res.json({
        test: "test2",
      })
    }
});

module.exports = router;
