var express = require('express');
var router = express.Router();
var formidable = require('formidable');


router.post('/', function(req, res, err){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files){
    var place = fields.place;
    if (place === "永康") {

    res.json({
      result: "您剛剛輸入的地點是[" + place + "]!",
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
      err:""
    })
  }else{
      res.json({
        err: "sorry, 沒有place為[" + place + "]的資料"
      });
  }
  })
  return;
})


module.exports = router;
