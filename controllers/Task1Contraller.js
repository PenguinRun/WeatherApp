var weatherData = require('../model/weatherData');
/* GET task1 page. */
module.exports = class ContrTask1 {
  getData(req, res, next){
    var id = req.query.id;
    if (id === "1") {
      res.json({
        weatherData,
        err: ""
      });
      return;
    } else {
      res.writeHead(400);
      res.write(JSON.stringify({
        err: "sorry, your query id is not equal 1, please change the query id"
      }));
      res.end();
      return;
    }
  }
}
