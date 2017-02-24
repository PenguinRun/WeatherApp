var express = require('express');
var router = express.Router();
var formidable = require('formidable');
/* POST task5 page. */
router.post('/', function(req, res, err) {

  var form = new formidable.IncomingForm();
  // form.uploadDir = './public/uploads';
  form.parse(req, function(err, imageInfo, files) {
    var place = imageInfo.place;
    var weatherInfo = {
      weatherName: imageInfo.weatherName,
      weatherPlace: imageInfo.weatherPlace,
      dateTime: {
        date: imageInfo.date,
        time: imageInfo.time,
      },
      temperature: imageInfo.temperature,
      rainfall: imageInfo.rainfall,
      imgData: files.imgData.path, //input data
      fileName: files.imgData.name, //origin imgName
    };
      res.json({
        connection: "檔案傳輸成功，您所傳的檔案是[" + weatherInfo.fileName +"]!",
        result:weatherInfo,
        err:""
      })
  })
})

module.exports = router;
