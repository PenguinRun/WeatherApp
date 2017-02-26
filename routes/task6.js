var express = require('express');
var router = express.Router();
/* GET task6 page. */
router.get('/', function(req, res, err) {
  //該圖片有16MB
  var imgPath =  "https://"+ req.hostname + "/sunrisePhoto.jpg"
    res.json({
      imgURL: imgPath,
      err: ""
    })
})

module.exports = router;
