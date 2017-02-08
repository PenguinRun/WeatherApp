var express = require('express');
var router = express.Router();

router.post('/', function(req, res, err){
  var data = {
    weatherName: req.body.weatherName
  }
  res.json({
    result: "您剛剛輸入的天氣是[" + data.weatherName + "]!",
    err:""
  });
})


module.exports = router;
