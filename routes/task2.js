var express = require('express');
var router = express.Router();

router.get('/', function(req, res, err){
  res.setHeader('content-type', 'application/json')
  res.json({
    place: {
      areaName: "台南",
      placeName: "永康"
    },
    weatherName: "陰天",
    dateTime:{
      date: "2017-2-7",
      time: "19:00",
    },
    temperature: 18,
    rainfall: 20.50,
    imgURL: "http://static2.ithome.com.tw/uploads/image-upload/53dba76e4d84c.jpg",
    err: ""
  })
})



module.exports = router;
