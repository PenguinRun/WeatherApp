var express = require('express');
var router = express.Router();
var formidable = require('formidable');
/* POST task5 page. */
router.post('/', function(req, res, next) {

  var form = new formidable.IncomingForm();
  // form.uploadDir = './public/uploads'; //upload image to server
  form.parse(req, function(err, imageInfo, files) {
    //判斷是否有上傳檔案
    if (isEmpty(files) ){ //如果沒有上傳檔案
      res.writeHead(400);
      res.write(JSON.stringify({
        err: "please choose a file to upload!"
      }));
      res.end();
      return;
    }else{ //如果有上傳檔案
      var weatherInfo = {
        weatherName: imageInfo.weatherName,
        weatherPlace: imageInfo.weatherPlace,
        weatherDate: imageInfo.weatherDate,
        weatherTime: imageInfo.weatherTime,
        temperature: imageInfo.temperature,
        rainfall: imageInfo.rainfall,
        imgData: files.imgData.path, //input data
        fileName: files.imgData.name, //origin imgName
      };
      //判斷與圖片相關的敘述參數中哪個沒填
      for(var key in weatherInfo){
        if(weatherInfo[key] === null || weatherInfo[key] == "" || typeof weatherInfo[key] === "undefined") {
          res.writeHead(400);
          res.write(JSON.stringify({
            err: "please enter the [" + key + "] value" //印出沒填的參數
          }));
          res.end();
          return;
        }
      }
      //回傳成功上傳的結果
      res.write(JSON.stringify({
        connection: "上傳成功！您剛剛傳的檔案為 [" + weatherInfo.fileName + "]",
        result: weatherInfo,
        err: ""
      }));
      res.end();
      return;
    }
  })
})

function isEmpty(obj){
  for (var key in obj){
    return false;
  }
  return true;
}

module.exports = router;
