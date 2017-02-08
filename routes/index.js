var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      res.json({
        place: ["台南", "永康"],
        weatherName: "陰天",
        data: "2017-2-7",
        time: "19:00",
        temperature: 18,
        rainfall: 20.50,
        err: ""
      })
});

module.exports = router;
