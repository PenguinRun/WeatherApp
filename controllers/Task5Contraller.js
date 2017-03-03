var formidable = require('formidable');
/* POST task5 page. */

module.exports = class ContrTask5 {
  postData(req, res, next){
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

        //判斷檔案大小
        var maxSize = 3 * 1024 * 1024; //3MB
        if (files.imgData.size > maxSize){
          res.writeHead(400);
          res.write(JSON.stringify({
            err: "請上傳小於3MB的檔案" //印出警示
          }));
          res.end();
          return;
        }

        var checkFieldValue = responseData(imageInfo);
        //判斷與圖片相關的敘述參數中哪個沒填
        for (var key in checkFieldValue){
          if(checkFieldValue[key] === null || checkFieldValue[key] == "" || typeof checkFieldValue[key] === "undefined") {
            res.writeHead(400);
            res.write(JSON.stringify({
              err: "please enter the [" + key + "] value" //印出沒填的參數
            }));
            res.end();
            return;
          }
        }
      }

      //判斷變數type是否為String
      var checkFieldTypeIsString = checkTypeString(imageInfo);
      for (var key in checkFieldTypeIsString){
        if (checkFieldTypeIsString[key].constructor != String){
          res.writeHead(400);
          res.write(JSON.stringify({
            err: "please enter the type of String value in [" + key + "]." //印出type非String的參數
          }));
          res.end();
          return;
        }
      }

      var checkFieldType = responseData(imageInfo);

      //判斷變數type是否為Int
      // console.log(checkTypeInt(checkFieldType.temperature));
      if (isNaN(checkTypeInt(checkFieldType.temperature))){
        res.writeHead(400);
        res.write(JSON.stringify({
          err: "please enter the type of Int value in [temperature]." //印出type非Int的參數
        }));
        res.end();
        return;
      }

      //判斷變數type是否為Double
      // console.log(checkTypeDobule(checkFieldType.rainfall));
      if (isNaN(checkTypeDobule(checkFieldType.rainfall))){
        res.writeHead(400);
        res.write(JSON.stringify({
          err: "please enter the type of Double value in [rainfall]." //印出type非Double的參數
        }));
        res.end();
        return;
      }

      //若滿足上述過程，則回傳資料
      res.write(JSON.stringify({
        result: "上傳成功！您剛剛傳的檔案為 [" + files.imgData.name + "]",
        weatherInfo: responseData(imageInfo),
        err: ""
      }));
      res.end();
      return;
    })
  }
}

function isEmpty(obj){
    for (var key in obj){
      return false;
    }
  return true;
}

function responseData(data){
  var responseDataInfo = {
    weatherName: data.weatherName, //String
    weatherPlace: data.weatherPlace, //String
    weatherDate: data.weatherDate, //String
    weatherTime: data.weatherTime, //String
    temperature: data.temperature, //Number
    rainfall: data.rainfall, //Number
  };
  return responseDataInfo;
}

function checkTypeString(data){
  var checkResponseString = {
    weatherName: data.weatherName,
    weatherPlace: data.weatherPlace,
    weatherDate: data.weatherDate,
    weatherTime: data.weatherTime,
  };
  return checkResponseString;
}

//透過正則來判斷是否為整數Int
function checkTypeInt(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

//透過正則來判斷是否為浮點數Double
function checkTypeDobule(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value) || /^(\-|\+)?([0-9]+\.[0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}
