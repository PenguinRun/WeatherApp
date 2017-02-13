var express = require('express');
var router = express.Router();
var weatherData = require('../model/weatherData');
/* GET task1 page. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  if (id === "1") {
    res.json({
      weatherData
    })
  } else {
    res.writeHead(400);
    res.write(JSON.stringify({
      err: "sorry, your query id is not equal 1, please change the query id"
    }));
    res.end();
  }
});

module.exports = router;
