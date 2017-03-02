var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task5Contraller');
/* POST task5 page. */
var Task5 = new Weather();

router.post('/', Task5.postData);

module.exports = router;
