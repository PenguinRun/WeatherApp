var express = require('express');
var router = express.Router();
var weatherData = require('../model/weatherData');
/* POST task3 page. */
router.post('/', function(req, res, err) {
  var data = {
    place: req.body.place,
  }
  if (data.place === "永康") {
    res.json({
      result: "您剛剛輸入的地點是[" + data.place + "]!",
      weatherData
    })
  } else {
    res.writeHead(404);
    res.write(JSON.stringify({
      err: "sorry, 沒有place為[" + data.place + "]的資料，請輸入[永康]試試看。"
    }));
    res.end();
  }
})


module.exports = router;
