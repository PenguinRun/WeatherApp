var express = require('express');
var router = express.Router();
var weatherData = require('../model/weatherData');
/* GET task2 page. */
router.get('/', function(req, res, err) {
  var id = req.headers.id;
  if (id === "1") {
    res.json({
      weatherData,
      err: ""
    })
  } else {
    res.writeHead(400);
    res.write(JSON.stringify({
      err: "sorry, your header id is not equal 1, please change the header id"
    }));
    res.end();
  }
})

module.exports = router;
