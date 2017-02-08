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
        data: data
      })
  });
});

module.exports = router;
