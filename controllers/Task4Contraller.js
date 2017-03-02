var weatherData = require('../model/weatherData');
var formidable = require('formidable');

module.exports = class ContrTask4 {
  postData(req, res, next){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var place = fields.place;
      if (place === "永康") {
        res.json({
          result: "您剛剛輸入的地點是[" + place + "]!",
          weatherData,
          err: ""
        })
      } else {
        res.writeHead(404);
        res.write(JSON.stringify({
          err: "sorry, 沒有place為[" + place + "]的資料，請輸入[永康]試試看。"
        }));
        res.end();
      }
    })
    return;
  }
}
