var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var form = new formidable.IncomingForm();

router.post('/', function(req, res, err){
  form.parse(req, function(err, fields, files){
    var place = fields.place;
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
    });

  })

})


module.exports = router;
