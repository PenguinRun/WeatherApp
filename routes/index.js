var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM weather', function(err, rows) {
      if (err) {
          console.log(err);
      }
      var data = rows;
      res.json({
        place: ["台南", "永康"],
        weatherName: "陰天",
        data: "2017-2-7",
        time: "19:00",
        temperature: 18,
        rainfall: 20.50,
      })
  });
});

module.exports = router;
