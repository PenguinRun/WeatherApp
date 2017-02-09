var express = require('express');
var router = express.Router();

router.post('/', function(req, res, err){
  var data = {
    place: req.body.place,
  }
  res.json({
    result: "您剛剛輸入的地點是[" + data.place + "]!",
    place: {
      areaName: "台南",
      placeName: "永康"
    },
    weatherName: "陰天",
    dataTime:{
      data: "2017-2-7",
      time: "19:00",
    },
    temperature: 18,
    rainfall: 20.50,
    err:""
  });
})


module.exports = router;
