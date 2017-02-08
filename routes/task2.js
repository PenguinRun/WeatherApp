var express = require('express');
var router = express.Router();

router.get('/', function(req, res, err){
  res.json({
    imgURL: "http://static2.ithome.com.tw/uploads/image-upload/53dba76e4d84c.jpg"
  })
})

module.exports = router;
