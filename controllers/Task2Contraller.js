var weatherData = require('../model/weatherData');
/* GET task2 page. */
module.exports = class ContrTask2 {
  getData(req, res, next){
    var id = req.headers.id;
    if (id === "1") {
      res.json({
        weatherData,
        err: ""
      });
      return;
    } else {
      res.writeHead(400);
      res.write(JSON.stringify({
        err: "sorry, your header id is not equal 1, please change the header id"
      }));
      res.end();
      return;
    }
  }
}
