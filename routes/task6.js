var express = require('express');
var router = express.Router();
/* GET task2 page. */
router.get('/', function(req, res, err) {
  var imgPath =  "https://"+ req.hostname + "/weather.JPG"
    res.json({
      imgURL: imgPath,
      err: ""
    })
})

module.exports = router;
